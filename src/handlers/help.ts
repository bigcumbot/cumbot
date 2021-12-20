import { Context } from 'grammy'

const message = `
Hewwo!

I am a diwty-diwty w-wittwe bot that wikes t-to do siwwy *looks at you* stuff. I am most f-fun in gwoup chats!

My fuww wist of commands:

/help and /start :3 – *notices buldge* sends this message
/cum – when *boops your nose* is sent as a wepwy t-to a message, *huggles tightly* wiww enhance i-it with hot emojis
/pasta and /copypasta – sends a wandom copypasta *starts twerking*
/spelling – checks spewwing and wepwies with a wist of cowwected cummy >w< ewwows *sweats* *looks at your armpit*
`

const handleHelp = (ctx: Context) => ctx.reply(message)

export default handleHelp
