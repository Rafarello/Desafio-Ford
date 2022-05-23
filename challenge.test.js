/* eslint-disable no-undef */
const { crypto, decrypto } = require('./index');

test('Testa encriptação e decriptação', () => {
  const word = 'RafAEl';
  const encrypt = crypto(word);
  const decrypt = decrypto(encriptação);
  expect(decrypt).toBe(word);
});
