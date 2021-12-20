import 'module-alias/register'
import 'reflect-metadata'
import 'source-map-support/register'

import { ignoreOld, sequentialize } from 'grammy-middlewares'
import { run } from '@grammyjs/runner'
import bot from '@/bot/bot'
import configure from '@/bot/configure'

import handleCum from '@/handlers/cum'
import handleHelp from '@/handlers/help'
import handlePasta from '@/handlers/pasta'
import handleSpelling from '@/handlers/spelling'
import handleText from '@/handlers/text'

const middlewares = () => bot.use(sequentialize()).use(ignoreOld())

const commands = () => {
  bot.command(['help', 'start'], handleHelp)
  bot.command('cum', handleCum)
  bot.command(['pasta', 'copypasta'], handlePasta)
  bot.command('spelling', handleSpelling)
  bot.on('message', handleText)
}

const errors = () => bot.catch(console.error)

const runApp = async () => {
  console.log('Starting app...')

  await configure(middlewares, commands, errors)

  run(bot)

  console.info(`Bot ${bot.botInfo.username} is up and running`)
}

void runApp()
