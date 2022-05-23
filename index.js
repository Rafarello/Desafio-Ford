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

const secondDecryption = (wordToBeDecrypted) => {
  const wordArray = wordToBeDecrypted.split('');
  const reverseWordArray = wordArray.reverse();
  return reverseWordArray.join('');
};

const thirdEncryption = (wordToBeEncrypted) => {
  const wordArray = wordToBeEncrypted.split('');
  const hash = wordArray.map((charactere, index) => {
    const charUpperCase = charactere.toUpperCase();
    const charLowerCase = charactere.toLowerCase();
    let letterToBeEncrypted = charactere;
    if (charUpperCase !== charLowerCase) {
      if (charactere === charUpperCase) {
        letterToBeEncrypted = charLowerCase;
      } else {
        letterToBeEncrypted = charUpperCase;
      }
      return letterToBeEncrypted;
    }
    return charactere;
  });
  return hash.join('');
};

const firstDecryption = (wordToBeDecrypted) => {
  const wordArray = wordToBeDecrypted.split('');
  const hash = wordArray.map((charactere) => {
    const charUpperCase = charactere.toUpperCase();
    const charLowerCase = charactere.toLowerCase();
    let letterToBeEncrypted = charactere;
    if (charUpperCase !== charLowerCase) {
      if (charactere === charUpperCase) {
        letterToBeEncrypted = charLowerCase;
      } else {
        letterToBeEncrypted = charUpperCase;
      }
      return letterToBeEncrypted;
    }
    return charactere;
  });
  return hash.join('');
};

const crypto = (word) => {
  let wordEncrypted = word;
  wordEncrypted = firstEncryption(wordEncrypted);
  wordEncrypted = secondEncryption(wordEncrypted);
  wordEncrypted = thirdEncryption(wordEncrypted);
  return wordEncrypted;
};

const decrypto = (hash) => {
  let wordDecrypted = hash;
  wordDecrypted = firstDecryption(wordDecrypted);
  wordDecrypted = secondDecryption(wordDecrypted);
  wordDecrypted = thirdDecryption(wordDecrypted);
  return wordDecrypted;
};
