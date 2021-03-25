function sub(match: string): string {
  if (match[0] === match[0].toUpperCase()) {
    return '<u>Cum</u>';
  }
  return '<u>cum</u>';
}

function correctText(inputText: string): string {
  const regex = /(c|C|k|K|К|к)(a|o|а|о)(m|м)/;
  return inputText.replace(regex, (match) => sub(match));
}

function correctSpelling(inputText: string): string | false {
  const correctedText = correctText(inputText);
  if (inputText === correctedText) {
    return false;
  }
  return correctedText;
}

export default correctSpelling;
