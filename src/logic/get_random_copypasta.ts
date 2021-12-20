import { pickRandom } from '@/helpers/array'
import { randomInt } from '@/helpers/random'
import axios from 'axios'
import cheerio from 'cheerio'

const getRandomCopypasta = async (): Promise<string> => {
  const page = randomInt({ min: 1, max: 100 })
  const { data } = await axios.get(`https://copypastatext.com/page/${page}/`)
  const $ = cheerio.load(data as string)
  const pastas = $('article')
    .map((_, el) => $(el).text())
    .toArray()

  return pickRandom(pastas).substring(0, 4095)
}

export default getRandomCopypasta
