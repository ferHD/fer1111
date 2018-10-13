const Discord = require("discord.js");
const YTDL = requiere("ytdl-core");

const TOKEN = "NDMyNTUzMzg1MjA4NzA5MTIx.DqPllg.6Qand_FUKI8VDoPXydHUbvsrQI8";
Const PREFIX = "!";

function generateHex() {
    return "#" + Math.floor(Math.random() *16777215).toStringg(16);
} 

function play(connection, message) {
    var server = servers[message.guild.id];
    
    server.dispatcher = connection.playStream(YTDL(server.queue[0]. {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", fuction() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var fortunes = [
    "Si"
    "No"
    "Tal vez"
    "Fucc u"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready"), fuction() {
    console.log("Ready");
});

bot.on("guildMemberAdd", fuction(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " welsone bitchi ie boty");

    member.addRole(member.guild.roles.find("name", "bitch"));

    member.guild.createRole({
        name: member.user.username,
        color: generateHex(),
        permissions: []
    }).then(fuction(role) {
        member.addRole(role);
    });
});

bot.on("message", function(message) {
    if (!message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]).toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("I'm a super dope bot created my Me");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read that");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .addField("Test Title", "Test Description",) true
                .addField("Test Titl2e", "Test De2cription",) true
                .addField("Test 3Title", "Test De3scription",) true
                .addField("Test 3Titl53e", "Test De3sc45ription")
                .addField("Test 3Titl4e", "Test De3s4cription")
                .setColor(0x00FFFF)
                .setFooter("This message is pretty cool,ohhh did i say message i mean EMBED gooteemmmmmmm")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        case "noticeme":
            message.channel.send.Message(message.author.toString() + " asasddasdasd");
            break;
        case "removerole":
            message.member.guild.roles.find("name", "bitch").delete();
            message.channel.sendMessage("delet"));
            break;
        case "deleterole":
            message.member.guild.roles.find("name", "bitch").delete();
            message.channel.sendMessage("delet");
            break;
        case "play":
            if (!args[1]) {
                message.channel.sendMessage("Please provide a link");
                return;
            }

            if(!message.member.voice) {
                message.channel.sendMessage("You must be in a voice cassd");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.is] = {
                queue: []
            };

            var server = server[message.guild.id];

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(fuction(connection) {

            });
            break;
        case "skip":
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;
        case "stop":
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;
        default:
            message.channel.sendMessage("Invalid command");
        }
    });
    
    client.login(process.env.BOT_TOKEN);


        
         



