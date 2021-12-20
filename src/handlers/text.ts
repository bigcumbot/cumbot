import * as Config from '@/constants/probability_config'
import { Context } from 'grammy'
import { processDirect } from '@/bot/guards'
import { randomDouble } from '@/helpers/random'
import emojify from '@/logic/emojify'

const handleText = (ctx: Context) =>
  processDirect(ctx, async (text, id) => {
    const shouldApplyEmojis = randomDouble({})

    if (shouldApplyEmojis < Config.randomFirePercent) {
      return ctx.reply(await emojify(text), {
        reply_to_message_id: id,
      })
    }
  })

export default handleText
