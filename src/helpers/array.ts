export const repeat = <T>(n: number, func: (arg: number) => T): T[] =>
  Array(n)
    .fill(1)
    .map((_, index) => func(index))

export const pickRandom = <T>(xs: T[]) =>
  xs[Math.floor(Math.random() * xs.length)]
