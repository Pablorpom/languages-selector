import { getSimpleLanguage } from './get-simple-language';

test('Is getSimpleLanguage defined', () => {
  expect(getSimpleLanguage).toBeDefined();
});

test('Simplifing laguages names to only 2 letters', () => {
  expect(getSimpleLanguage('en-En')).toBe('en');
});

test('Simplifing laguages names to only 2 letters length', () => {
  expect(getSimpleLanguage('en-En').length).toBe(2);
});
