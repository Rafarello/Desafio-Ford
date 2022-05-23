/* eslint-disable no-undef */
const { crypto, decrypto } = require('./index');

test('Testa encriptação e decriptação', () => {
  const word = 'RafAEl';
  const encriptação = crypto(word);
  const decriptação = decrypto(encriptação);
  expect(decriptação).toBe(word);
});
