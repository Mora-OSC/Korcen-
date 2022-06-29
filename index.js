const { Client , Intents , Collection,MessageEmbed}  = require('discord.js')
const client = new Client({intents:32767})
const { check, general, minor, sexual, belittle, race, parents, foreign, special, politics } = require('korcen');
const chid = "검열시 로그"
client.on('messageCreate', async (msg) => {
    if (!msg.guild) return;
    if (msg.author.bot) return;
    if (msg.attachments.size > 0) return;
    if (!msg.content) return;
    const c = check(msg.content)

    if (c) {
        const date = new Date()
        const time = Math.round(date.getTime() / 1000)
        msg.delete();
        if (general(msg.content)) { // 일반욕설
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`일반욕설\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`일반욕설\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })

        }
        else if (minor(msg.content)) { // 사소한욕설
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`사소한욕설\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`사소한욕설\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else if (sexual(msg.content)) { // 성적발언
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`성적발언\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`성적발언\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else if (belittle(msg.content)) { // 비하발언
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`비하발언\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`비하발언\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else if (race(msg.content)) { // 인종차별발언
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`인종차별발언\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`인종차별발언\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else if (parents(msg.content)) { // 패드립
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`패드립\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`패드립\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else if (foreign(msg.content)) { // 외국욕설
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`외국욕설\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`외국욕설\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else if (politics(msg.content)) { // 정치발언
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`정치발언\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`정치발언\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else if (special(msg.content)) { // 이모지욕설
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`이모지욕설\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`이모지욕설\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
        else { // 비속어
            const embed = new MessageEmbed()
                .setTitle(`${msg.author.tag}님의 채팅을 검열했습니다.`)
                .setTimestamp()
                .addFields(
                    { name: `검열된 메세지`, value: `\`\`\`${msg.content}\`\`\`` },
                    { name: `검열 사유`, value: `\`비속어\`` }
                )
                .setDescription("메시지가 검열이 되었습니다.")
                .setColor("#FF0000")
            msg.channel.send({ embeds: [embed] }).then(msg => {
                setTimeout(() => {
                    msg.delete()

                }, 5000);
            })
            const logembed = new MessageEmbed()

                .setTitle(`단어가 검열되었어요!`)
                .setThumbnail(`${msg.author.displayAvatarURL()}`)
                .setDescription(`${msg.channel}에서 단어가 검열되었습니다!`)
                .addField(`**검열된 메세지**`, `\`\`\`${msg.content}\`\`\``)
                .addFields(
                    { name: `검열시간`, value: `<t:${time}:F>`, inline: true },
                    { name: `유저`, value: `${msg.author.tag}`, inline: true },
                    { name: `사유`, value: `\`비속어\``, inline: true },
                )
                .setTimestamp()

            client.channels.cache.get(chid).send({ embeds: [logembed] })
        }
    }
})

client.on('ready', async () => {
    console.log(`✅ | ${client.user.tag}가동완료`);
})

client.login("토큰")