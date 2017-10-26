const Commando = require("discord.js-commando")
const client = new Commando.Client({
    owner: '269783091583647754',
    commandPrefix: `;`
});
const path = require("path");
const fs = require("fs");

let userdata = JSON.parse(fs.readFileSync("./storage/userdata.json", null, 4, "utf-8cls"));
client.registry
// Registers your custom command groups
.registerGroups([
    ['moderation', 'Moderation commands'],
    ['fun', 'Fun commands'],
    ['utilities', 'Utility commands'],
    ['economy', 'Economy commands'],
    ['misc', 'Extra commands']
])

// Registers all built-in groups, commands, and argument types
.registerDefaults()
// Registers all of your commands in the ./commands/ directory
.registerCommandsIn(path.join(__dirname, 'commands'));


client.on('ready', () => {
	console.log(`${client.user.tag} is now online, in ${client.guilds.size} guilds!`);
	client.user.setGame(`;help | In ${client.guilds.size} guilds!`);
});

client.on("guildCreate", (guild) => {
	console.log(`${client.user.tag} has joined ${guild.name} (${guild.id}) owned by ${guild.owner.user.tag} (${guild.owner.user.id})`);
	client.user.setGame(`;help | In ${client.guilds.size} guilds!`);
});

client.on("guildDelete", (guild) => {
	console.log(`${client.user.tag} has left ${guild.name} (${guild.id}) owned by ${guild.owner.user.tag} (${guild.owner.user.id})`);
	client.user.setGame(`;help | In ${client.guilds.size} guilds!`);
});

client.on('message', function(message) {
    if (!userdata[message.author.id]) userdata[message.author.id] = {
        coins: 0
    };

    userdata[message.author.id].coins++;

    fs.writeFile('./storage/userdata.json', JSON.stringify(userdata, null, 4), (err) => {
        if (err) throw err;
    })
});

client.login(process.env.TOKEN)
