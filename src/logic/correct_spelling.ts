const sub = (match: string): string =>
  match[0] === match[0].toUpperCase() ? '<u>Cum</u>' : '<u>cum</u>'

const regex = /(c|с|k|к|C|С|K|К)(a|o|а|о)(m|м)/

const correctText = (inputText: string): string => inputText.replace(regex, sub)

const correctSpelling = (inputText: string): string | undefined => {
  const correctedText = correctText(inputText)

  if (inputText !== correctedText) return correctedText
}

export default correctSpelling
