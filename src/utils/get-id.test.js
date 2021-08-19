import { getId } from './get-id';

test('Is getId defined', () => {
  expect(getId).toBeDefined();
});

test('Get an ID', () => {
  const id = {
    label: 'label',
    id: 'id',
  };
  expect(getId(id)).toBe('id');
});
