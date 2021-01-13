/* eslint-disable fp/no-nil */
/* eslint-disable fp/no-unused-expression */

import { Telegraf } from 'telegraf';
import emojify from './emojify';
import * as dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.TOKEN!);

bot.command('cum', (ctx: any) => {
  const replyToMessage = ctx.message.reply_to_message;
  if (typeof replyToMessage !== 'undefined') {
    if (typeof replyToMessage.text !== 'undefined') {
      ctx.reply(emojify(replyToMessage.text));
    }
  }
});

bot.launch();
