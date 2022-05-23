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

const thirdDecryption = (wordToBeDecrypted) => {
  const wordArray = wordToBeDecrypted.split('');
  const vinNumberLength = wordArray.length;
  const hash = wordArray.map((_charactere, index) => {
    const charactereCode = wordToBeDecrypted.charCodeAt(index);
    const encryptedCharacterCode = charactereCode - vinNumberLength;
    return String.fromCharCode(encryptedCharacterCode);
  });
  return hash.join('');
};

const secondEncryption = (wordToBeEncrypted) => {
  const wordArray = wordToBeEncrypted.split('');
  const reverseWordArray = wordArray.reverse();
  return reverseWordArray.join('');
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
