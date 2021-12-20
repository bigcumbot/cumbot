import { Context } from 'grammy'

export const processReplying = <T>(
  ctx: Context,
  callback: (repliedText: string, repliedId: number) => T | undefined
) => {
  const replyToMsg = ctx.message?.reply_to_message
  const text = replyToMsg?.text

  if (text) return callback(text, replyToMsg.message_id)
}

export const processDirect = <T>(
  ctx: Context,
  callback: (text: string, id: number) => T | undefined
) => {
  const text = ctx.message?.text
  const id = ctx.message?.message_id

  if (id && text) return callback(text, id)
}
