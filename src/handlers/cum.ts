import { Context } from 'grammy'
import { processReplying } from '@/bot/guards'
import emojify from '@/logic/emojify'

const handleCum = (ctx: Context) =>
  processReplying(ctx, async (repliedText, repliedId) =>
    ctx.reply(await emojify(repliedText), {
      reply_to_message_id: repliedId,
    })
  )

export default handleCum
