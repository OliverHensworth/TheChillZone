const { Command } = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'utilities',
            memberName: 'invite',
            description: 'Invite Chill Zone.',
            examples: ['invite'],
            guildOnly: false,

            // userPermissions: ['MANAGE_MESSAGES'],

            // throttling: {
            //     usages: 0,
            //     duration: 0
            // },
        });
    }

    run(msg, {victim}) {
        const embed = new Discord.RichEmbed()
            .setAuthor(`Chill Zone Invite`)
            .setTitle("Click here to invite.")
            .setURL("https://discordapp.com/oauth2/authorize?client_id=372795474832523264&scope=bot&permissions=2146958591")
            .setDescription("Or, join [our discord](https://discord.gg/NT8aVqD)!")
            .setColor(0x0de538)
           
            .setFooter("� The Chill Zone", this.client.user.displayAvatarURL) //AVATAR AFTER VENOM
        
           .setTimestamp();

        return msg.channel.send({embed});

    }
};