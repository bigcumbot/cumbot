import { Context } from 'grammy'
import { processDirect } from '@/bot/guards'
import getRandomCopypasta from '@/logic/get_random_copypasta'

const handlePasta = (ctx: Context) =>
  processDirect(ctx, async (_, id) =>
    ctx.reply(await getRandomCopypasta(), {
      reply_to_message_id: id,
    })
  )

export default handlePasta
