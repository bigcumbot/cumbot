/* eslint-disable fp/no-nil */
/* eslint-disable fp/no-unused-expression */

import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

import emojify from './helpers/emojify';
import correctSpelling from './helpers/correctSpelling';

dotenv.config();

const bot = new Telegraf(process.env.TOKEN!);

bot.command('cum', (ctx: any) => {
  const replyToMessage = ctx.message.reply_to_message;
  if (typeof replyToMessage !== 'undefined') {
    if (typeof replyToMessage.text !== 'undefined') {
      ctx.reply(emojify(replyToMessage.text), {
        reply_to_message_id: ctx.message.reply_to_message.message_id
      });
    }
  }
});

bot.command('help', (ctx) => {
  ctx.reply(
    'Ответьте на текстовое сообщение командой /cum и я сделаю его cummy.\n\nТакже, если я увижу неверное написание слова (комфорт вместо cumфорт), то я обязательно вас поправлю ~~UwU.'
  );
});

/*bot.on('text', (ctx) => {
  const correctedText = correctSpelling(ctx.message.text);
  if (correctedText !== false) {
    ctx.reply(`Pwease, write cowwectly 🥺\n\n<i>${correctedText}</i>`, {
      reply_to_message_id: ctx.message.message_id,
      parse_mode: 'HTML'
    });
  }
});*/

bot.launch();
