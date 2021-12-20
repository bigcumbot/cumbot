import { Bot, Context } from 'grammy'

import env from '@/helpers/env'

const bot = new Bot<Context>(env.TOKEN, {
  ContextConstructor: Context,
})

export default bot
