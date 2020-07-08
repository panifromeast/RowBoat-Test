module.exports = {
    name: 'ping',
    description: "classical ping lol",
    execute(message, args){
        message.channel.send('pong!');
    }
}