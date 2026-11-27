import { blankDraft } from '../src/domain/learning/personal';
import { getVocabulary } from '../src/domain/vocabulary/registry';
import { LearningStore } from '../src/learning/store';

// Build the fixture through the same write paths as a learner.
export function bilingualInventory(store: LearningStore) {
  for (const language of ['fi', 'sv'] as const) {
    const finnish = language === 'fi';
    const course = store.saveCollection(language, 'Course notes', 'Lessons'),
      everyday = store.saveCollection(language, 'Everyday', '');
    const curated = getVocabulary(language)[0].wordId;
    const entry = (displayForm: string, english: string, enrol: boolean) => {
      const id = store.newPersonalId();
      store.saveEntry(
        language,
        id,
        { ...blankDraft, displayForm, english, note: 'My course notes' },
        { enrol, collections: [course, everyday] },
      );
      return id;
    };
    const changed = entry(finnish ? 'sää' : 'en nyckel', finnish ? 'weather' : 'a key', true);
    const archived = entry(finnish ? 'ovi' : 'en dörr', 'door', true);
    entry(finnish ? 'ensi kuussa' : 'nästa månad', 'next month', false);
    store.changeMemberships(
      language,
      [course, everyday].map((collectionId) => ({ collectionId, wordId: curated, selected: true })),
    );
    store.start(language, { kind: 'today' }, 'mixed');
    const first = store.current(language)!;
    for (const card of store.cards(first.id)) {
      store.present(language, first.id, card);
      store.reveal(language, first.id, card);
      store.rate(language, first.id, card, card.position === 0 ? 'Almost' : 'Knew It');
      store.next(language, first.id, card);
    }
    store.chooseRevisit(language, first.id, false);
    store.dismiss(language, first.id);
    const old = store.personal(language, changed)!;
    store.saveEntry(
      language,
      changed,
      { ...old, english: finnish ? 'the weather' : 'the key' },
      { original: old, confirmReset: true },
    );
    store.archiveEntry(language, archived);
    store.enrol(language, [curated]);
    store.start(language, { kind: 'collection', id: course }, 'mixed');
    const current = store.current(language)!;
    for (const card of store.cards(current.id)) {
      store.present(language, current.id, card);
      store.reveal(language, current.id, card);
      if (finnish && card.position === 1) break;
      store.rate(language, current.id, card, card.position === 0 ? 'Almost' : 'Knew It');
      store.next(language, current.id, card);
    }
    if (!finnish) store.chooseRevisit(language, current.id, false);
  }
}
