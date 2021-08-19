import { compareLists } from './compare-lists';

test('Is compareList defined', () => {
  expect(compareLists).toBeDefined();
});

test('Compare 2 list to fin similar values', () => {
  expect(compareLists(['es', 'en', 'de'], ['fr', 'es', 'de'])).toBe('es');
});

test('Compare 2 list to fin similar values, if there isnt one, set off', () => {
  expect(compareLists(['es', 'en', 'de'], ['fr', 'it', 'lt'])).toBe(undefined);
});
