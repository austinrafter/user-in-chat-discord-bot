const { Events } = require('discord.js');

module.exports = {
    name: Events.VoiceStateUpdate,
    async execute(oldState, newState) {

        const command = newState.channel;

        if (command == "None") {
            console.error(`No channel matching ${newState.channel} was found.`);
            return;
        }

        try {

            const channel = client.channels.cache.get(1118252232945696841);

            channel.send(`@everyone ${newState.user.username} is in ${newState.channel}. GET ON!`)
        } catch (error) {
            console.error(`Error executing ${newState.channel}`);
            console.error(error);
        }
    },
};