function sum(ctx) {
    const message = ctx.message.text.split(' ')
    const firstNumber = Number(message[1])
    const secondNumber = Number(message[2])
    const result = firstNumber + secondNumber

    ctx.reply(`Your sum is ${result}`);
}

function mult(ctx) {
    const message = ctx.message.text.split(' ');
    const firstNumber = Number(message[1])
    const secondNumber = Number(message[2])
    const result = firstNumber * secondNumber

    ctx.reply(`Your are genius! Your multiplication is ${result}`);

}
module.exports = { sum, mult };
// sdgerg