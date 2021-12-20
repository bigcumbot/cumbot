declare module 'moji-translate' {
  export function getEmojiForWord(string: string): string
  export function getAllEmojiForWord(string: string): string[]
  export function isMaybeAlreadyAnEmoji(string: string): boolean
  export function translate(chunk: string, onlyEmoji?: boolean): string
}
