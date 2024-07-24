const { Telegraf } = require( 'telegraf');
const { sum, mult } = require('./handlers2.js');
// const console = require("node:console");
// const console = require("node:console");

const bot = new Telegraf('7143165396:AAE0YEs1uLtEh9XdKekx9mOapMelSBjoVek');

const dataBase = {

}

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply(':)'));
bot.hears('hi',(ctx) => ctx.reply('Hey there'));

bot.command('profile',(ctx) => {
    const chatId = ctx.chat.id;
    // const dataBase = ctx.message.text.split(' ');
    const profile = dataBase[chatId];
    if (!profile) {
        ctx.reply(`You have not profile`);
        return;
    }
    ctx.reply(`Your name is ${profile.name}, you are ${profile.age} years old`);
});
bot.on('text',(ctx)=> {
    if(ctx.message.text.startsWith('sum')) sum(ctx);
    if(ctx.message.text.startsWith('mult')) mult(ctx);

    if(ctx.message.text.startsWith('/name')) {
        const message = ctx.message.text.split(' ');
        const name = message[1];
        if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]  = {};
        dataBase[ctx.chat.id].name = name;
        ctx.reply(`Your name is ${name}`);
    }
    if(ctx.message.text.startsWith('/age')) {
        const message = ctx.message.text.split(' ');
        const age = message[1];
        if(!dataBase[ctx.chat.id]) dataBase[ctx.chat.id]  = {};
        dataBase[ctx.chat.id].age = age;
        ctx.reply(`Your age is ${age} years old`);
    }
    console.log(dataBase)
    });
bot.launch().then(() => console.log('Bot started'));

process.once('SIGINT',() => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'));





