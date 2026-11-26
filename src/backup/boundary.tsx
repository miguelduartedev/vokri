import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';
import { ActivityIndicator, BackHandler, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Type } from '../ui/primitives';
import { ThemeProvider, useTheme } from '../ui/theme';
import { isLoaded } from 'expo-font';
import type { AppearancePreference, PreferenceStore } from '../preferences/store';
import { BackupError } from './format';
import { recoverStartup, restoreBackup, RecoveryBlocked, type Candidate } from './native';

const RestoreContext = createContext<(candidate: Candidate, store: PreferenceStore) => void>(() => {
  throw new Error('Recovery boundary unavailable');
});
export const useRestore = () => useContext(RestoreContext);
type Status = 'checking' | 'ready' | 'restoring' | 'restored' | 'reverted' | 'blocked';
function RecoveryPanel({
  status,
  message,
  next,
}: {
  status: Status;
  message: string;
  next: () => void;
}) {
  const { colors } = useTheme();
  const busy = status === 'checking' || status === 'restoring';
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center' }}>
      <View style={{ padding: 24, gap: 20 }}>
        {busy && <ActivityIndicator color={colors.ink} />}
        <Type variant="title" accessibilityRole="header">
          {
            {
              checking: 'Opening Vokri Cards',
              ready: '',
              restoring: 'Restoring your backup…',
              restored: 'Backup restored',
              reverted: 'Your previous data is ready',
              blocked: 'Recovery needs attention',
            }[status]
          }
        </Type>
        {!!message && <Type accessibilityLiveRegion="polite">{message}</Type>}
        {!busy && (
          <Button label={status === 'blocked' ? 'Retry recovery' : 'Continue'} onPress={next} />
        )}
      </View>
    </SafeAreaView>
  );
}
export function RecoveryBoundary({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<Status>('checking'),
    [message, setMessage] = useState('');
  const [appearance, setAppearance] = useState<AppearancePreference>('system');
  const opening = useRef<ReturnType<typeof recoverStartup> | null>(null),
    restoring = useRef(false);
  function check(retry = false) {
    opening.current ??= recoverStartup(retry);
    void opening.current
      .then(
        (result) => {
          if (result === 'rolledBack') {
            setMessage('An interrupted restoration was rolled back.');
            setStatus('reverted');
          } else setStatus(result === 'committed' ? 'restored' : 'ready');
        },
        () => {
          setMessage('Your recovery data is retained. Check available device storage and retry.');
          setStatus('blocked');
        },
      )
      .finally(() => {
        opening.current = null;
      });
  }
  useEffect(() => {
    check();
  }, []);
  useEffect(() => {
    if (status === 'ready') return;
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => subscription.remove();
  }, [status]);
  function restore(candidate: Candidate, preferences: PreferenceStore) {
    if (restoring.current) return;
    restoring.current = true;
    const current = preferences.getSnapshot();
    if (current.status === 'ready') setAppearance(current.preferences.appearance);
    setMessage('Keep Vokri Cards open while it verifies your data.');
    setStatus('restoring');
    void restoreBackup(candidate, preferences)
      .then(
        () => {
          setAppearance(candidate.header.preferences?.appearance ?? 'system');
          setMessage('Your vocabulary, study history and preferences are ready.');
          setStatus('restored');
        },
        (error) => {
          if (error instanceof RecoveryBlocked) {
            setMessage(error.message);
            setStatus('blocked');
          } else {
            setMessage(
              error instanceof BackupError
                ? error.message
                : 'Restoration could not finish. Your previous installation is available.',
            );
            setStatus('reverted');
          }
        },
      )
      .finally(() => {
        restoring.current = false;
      });
  }
  if (status === 'ready')
    return <RestoreContext.Provider value={restore}>{children}</RestoreContext.Provider>;
  return (
    <ThemeProvider
      preference={appearance}
      fonts={isLoaded('Newsreader') && isLoaded('Inter') && isLoaded('InterSemiBold')}
    >
      <RecoveryPanel
        status={status}
        message={message}
        next={() => {
          if (status === 'blocked') {
            setStatus('checking');
            setMessage('');
            check(true);
          } else setStatus('ready');
        }}
      />
    </ThemeProvider>
  );
}
