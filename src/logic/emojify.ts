import googleTranslate = require('translate-google')
import emojiTranslate = require('moji-translate')

import * as Config from '@/constants/probability_config'
import { pickRandom, repeat } from '@/helpers/array'
import { randomDouble, randomInt } from '@/helpers/random'
import emojis from '@/constants/emojis'

const addEmoji = (original: string, english: string): string | undefined => {
  const shouldApplyEmojis = randomDouble({})

  if (shouldApplyEmojis < Config.emojisPercent) {
    const emojisAmount = randomInt({ max: Config.maximumEmojis })
    if (emojisAmount !== 0) {
      const emojiArray = [
        emojiTranslate.getEmojiForWord(english),
        ...repeat(emojisAmount, () => pickRandom(emojis)),
      ]

      return original + ' ' + emojiArray.join('')
    }
  }
}

const forbidden = [
  'i',
  'you',
  'she',
  'he',
  'we',
  'they',
  'am',
  'is',
  'are',
  'thanks',
]

const en = {
  to: 'en',
}

const emojify = async (inputText: string): Promise<string> => {
  const translated = (await googleTranslate(inputText, en))
    .split(' ')
    .map((word) => (forbidden.includes(word.toLowerCase()) ? '' : word))

  return inputText
    .split(' ')
    .map((word, i) => addEmoji(word, translated[i]) ?? word)
    .join(' ')
}

export default emojify
