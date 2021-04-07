exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: 'Bot Orders 🎵' },
            footer:{ text: 'Bot bu 🅸🆂 | ᴱᴸᴱᴳᴬᴺᵀ ᴹᴬᴺ  for ツ𝑯𝑳𝑺ツ' },
            fields: [
                { name: 'Music Orders', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
        },
    });

};
