import { Context } from 'grammy'
import { processReplying } from '@/bot/guards'
import correctSpelling from '@/logic/correct_spelling'

const handleSpelling = (ctx: Context) =>
  processReplying(ctx, (repliedText, repliedId) => {
    const correctedText = correctSpelling(repliedText)

    if (correctedText) {
      return ctx.reply(correctedText, {
        reply_to_message_id: repliedId,
        parse_mode: 'HTML',
      })
    }
  })

export default handleSpelling
