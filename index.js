const firstEncryption = (wordToBeEncrypted) => {
  const wordArray = wordToBeEncrypted.split('');
  const vinNumberLength = wordArray.length;
  const hash = wordArray.map((_charactere, index) => {
    const charactereCode = wordToBeEncrypted.charCodeAt(index);
    const encryptedCharacterCode = charactereCode + vinNumberLength;
    return String.fromCharCode(encryptedCharacterCode);
  });
  return hash.join('');
};

const crypto = (word) => {
  let wordEncrypted = word;
  wordEncrypted = firstEncryption(wordEncrypted);
  wordEncrypted
  return wordEncrypted;
};

const decrypto = (hash) => {
  let wordDecrypted = hash;
  wordDecrypted = thirdDecryption(wordDecrypted);
  return wordDecrypted;
};
