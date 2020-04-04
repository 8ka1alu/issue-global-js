const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', message =>
{
    client.user.setPresence({ game: { name: 'ヘルプ| is!help' }, status: 'idle' });  
    console.log('いしゅー');

    const ch_name = "issue-start";

    client.channels.forEach(channel =>
    {
        if (channel.name === ch_name) 
        {
            channel.send("**再起動通知**(global chat版)\nいしゅー")
            return;
        }
        return;
    });
})

client.on('message', message =>
{
    if (message.channel.name === 'issue-global')
    {
        if (message.author.bot) return;
        if (message.content.match(/discord.gg/)) 
        {
            message.delete(100)
            return;
        }
        if (talkedRecently.has(message.author.id)) 
        {
            message.channel.send("5秒間発言できません。-" + message.author)
            return;
        }
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'issue-global')
                {
                    channel.send(embed)
                    talkedRecently.add(message.author.id);
                    setTimeout(() => 
                    {
                        talkedRecently.delete(message.author.id); 
                    }, 5000)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'issue-global')
                {
                    channel.send(embed)
                    talkedRecently.add(message.author.id);
                    setTimeout(() => 
                    {
                        talkedRecently.delete(message.author.id);
                    }, 5000)
                    return;
                }
                return;
            }));
            return;
        });
    }
})

client.login(process.env.BOT_TOKEN);


