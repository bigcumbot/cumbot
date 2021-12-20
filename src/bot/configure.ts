import bot from '@/bot/bot'

const configure = async (...functions: (() => unknown)[]) => {
  functions.forEach((fn) => fn())
  await bot.init()
}

export default configure
