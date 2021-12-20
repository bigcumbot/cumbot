export type Bounds = {
  min?: number
  max?: number
}

export const randomDouble = ({ min = 0, max = 1 }: Bounds) =>
  Math.random() * (max - min) + min

export const randomInt = ({ min = 0, max = 1 }: Bounds) =>
  Math.floor(randomDouble({ min: Math.ceil(min), max: Math.floor(max) }))
