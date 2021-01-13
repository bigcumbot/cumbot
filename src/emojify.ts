import emojis from './emojis';

function repeatM<T>(n: number, func: (arg: number) => T): T[] {
  const range = Array(n)
    .fill(1)
    .map((element, index) => index);
  return range.map((element) => func(element));
}

function emojify(inputText: string): string {
  const emojisPercent = 0.33;
  const maximumEmojis = 3;

  const textArray = inputText.split(' ');

  const emojifiedTextArray = textArray.map(function (element) {
    const applyEmojis = Math.random();

    if (applyEmojis > emojisPercent) {
      const emojisAmount = Math.random() * maximumEmojis;
      if (emojisAmount === 0) {
        return element;
      }
      const emojisArray = repeatM(
        Math.round(emojisAmount),
        (index) => emojis[Math.floor(Math.random() * emojis.length)]
      );
      return element + ' ' + emojisArray.join('');
    }
    return element;
  });

  return emojifiedTextArray.join(' ');
}

export default emojify;
