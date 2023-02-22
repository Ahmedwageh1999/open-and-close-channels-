

const express = require('express'); /// go ahead to a shell and write npm i express just like that  / ahmed sn => bergo

const app = express();

app.listen(() => console.log('iq server'));

app.use('/ping', (req, res) => {

    res.send(new Date());

});

const {  Intents,  Collection, timeout, Discord, Message , PermissionsBitField, MessageEmbed} = require("discord.js"); // npm i discord.js

const sleep = require('util').promisify(setTimeout)

const Enmap = require("enmap")

const schedule = require('node-schedule');

const ms = require("ms")

const db1 = new Enmap({

  name: 'ahmed',

})

const { MessageButtonPages } = require("discord-button-page");

const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({

  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_SCHEDULED_EVENTS, Intents.FLAGS.MESSAGE_CONTENT],

  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],

});

client.on('ready', async () => {

  function abady() {

    let status = [`Mychannel is Ahmed Sn`, `Bergo`, `Smart S`]

    let S = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[S], { type: 'WATCHING' })

  };

  //ismailmgde

  setInterval(abady, 5000)

})

client.on("ready", () => {

  console.log(client.user.tag)

})

////

////// messageopen for showing a message when a channels open // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async message => {

  if (message.content.startsWith("messageopen")) {

    const argss = message.content.split(" ").slice("1").join(" ")

    db1.ensure("aa",

      {

        message: []

      }

    )

    db1.push("aa", argss, "message")

    await message.reply({ content: `done ${db1.get("aa", "message")} added to database ✅` })

  }

})

//////////to detect the messageclose // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async message => {

  if (message.content.startsWith("messageclose")) {

    const argsss = message.content.split(" ").slice("1").join(" ")

    db1.ensure("mm",

      {

        message: []

      }

    )

    db1.push("mm", argsss, "message")

    await message.reply({ content: `done ${db1.get("mm", "message")} added to database ✅` })

  }

})

//////// to select a hour which the room closed Oh ! opened sorry in it // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A 

client.on("messageCreate", async message => {

  if (message.content.startsWith("houropen")) {

    let argo = message.content.split(" ").slice("1")

    db1.ensure("pp",

      {

        timeopen: []

      })

    db1.push("pp", argo, "timeopen")

    message.reply({ content: `Done the opentime saved ✅` })

  }

})

//aa mm pp 

///////// to select the hour which the rooms will close in it // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async message => {

  if (message.content.startsWith("hourclose")) {

    let argoo = message.content.split(" ").slice("1")

    db1.ensure("aa",

      {

        timeclose: []

      })

    db1.push("aa", argoo, "timeclose")

    message.reply({ content: `Done the closetime saved ✅` })

  }

})

////////// to select the minute also with hour when the rooms opened // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async message => {

  if (message.content.startsWith("minuteopen")) {

    let argo = message.content.split(" ").slice("1")

    db1.ensure("pp",

      {

        minuteopen: []

      })

    db1.push("pp", argo, "minuteopen")

    message.reply({ content: `Done the opentime saved ✅` })

  }

})

///////// to select the minute of closing the rooms with hour // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async message => {

  if (message.content.startsWith("minuteclose")) {

    let argoo = message.content.split(" ").slice("1")

    db1.ensure("aa",

      {

        minuteclose: []

      })

    db1.push("aa", argoo, "minuteclose")

    message.reply({ content: `Done the closetime saved ✅` })

  }

})

////////// remove a message from database

///////// start the looping of hide and show channels // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async message => {

  if (message.content.startsWith("start")) {

    const ds = await message.channel.send({ content: ` ✅ ستظهر التحديثات هنا` })

    // /////////////// set view channels false 

    const rule = new schedule.RecurrenceRule();

    rule.dayOfWeek = [0, new schedule.Range(1, 6)];

    rule.hour = db1.get("pp", "timeopen")

    /// the time of hide the channels with hours

    rule.minute = db1.get("pp", "minuteopen"); //// the hour with minute for example => 12:12

    schedule.scheduleJob(rule, async function () {

      ////

      const channel1 = message.guild.channels.cache.get("1072281945880403998")

      const channel2 = message.guild.channels.cache.get("1072280873946333234")

      const channel3 = message.guild.channels.cache.get("1072275834649444493")

      //    const channel4 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel5 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel6 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel7 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel8 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel9 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel10 = message.guild.channels.cache.get("1072281945880403998")

      const embed1 = new MessageEmbed()

     

        .setAuthor(message.guild.name)

        .setDescription(`**${db1.get("aa", "message")}** `)

        .setFooter({ text: `تغلق الرومات في ${db1.get("aa", "timeclose")}:${db1.get("aa", "minuteclose")}` })

        

      const oo = await message.channel.send({ content: `@here` })

      setTimeout(() => {

        oo.delete()

      }, 1000);

      await ds.edit({ content: `||@here||** تم فتح رومات البيع**`, embeds: [embed1] })

      channel1.permissionOverwrites.edit(channel1.guild.roles.everyone, { VIEW_CHANNEL: true });

      channel2.permissionOverwrites.edit(channel2.guild.roles.everyone, { VIEW_CHANNEL: true });

      channel3.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: true });

      // channel4.permissionOverwrites.edit(channel1.guild.roles.everyone, { VIEW_CHANNEL: true });

      // channel5.permissionOverwrites.edit(channel2.guild.roles.everyone, { VIEW_CHANNEL: true });

      // channel6.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: true });

      // channel7.permissionOverwrites.edit(channel1.guild.roles.everyone, { VIEW_CHANNEL: true });

      // channel8.permissionOverwrites.edit(channel2.guild.roles.everyone, { VIEW_CHANNEL: true });

      // channel9.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: true });

      // channel10.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: true });

      //////////

    });

    /////////// set view channels true

    const role = new schedule.RecurrenceRule();

    role.dayOfWeek = [0, new schedule.Range(1, 6)];

    role.hour = db1.get("aa", "timeclose")

    role.minute = db1.get("aa", "minuteclose")

    schedule.scheduleJob(role, async function () {

      ////

      const channel1 = message.guild.channels.cache.get("1072281945880403998")

      const channel2 = message.guild.channels.cache.get("1072280873946333234")

      const channel3 = message.guild.channels.cache.get("1072275834649444493")

      //    const channel4 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel5 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel6 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel7 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel8 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel9 = message.guild.channels.cache.get("1072281945880403998")

      //    const channel10 = message.guild.channels.cache.get("1072281945880403998")

      const embed2 = new MessageEmbed()

        

        .setAuthor(message.guild.name)

        .setDescription(`** ${db1.get("mm", "message")} **`)

        .setFooter({ text: `تفتح الرومات في ${db1.get("pp", "timeopen")}:${db1.get("pp", "minuteopen")}` })

      

      // channel.messages.fetch(`1074809952520130690`).then(message => { // / id the message to edit 

      const ii = await message.channel.send({ content: `@here` })

      setTimeout(() => {

        ii.delete()

      }, 1000);

      ds.edit({ content: `||@here|| **تم غلق رومات البيع**`, embeds: [embed2] })

    

      channel1.permissionOverwrites.edit(channel1.guild.roles.everyone, { VIEW_CHANNEL: false });

      channel2.permissionOverwrites.edit(channel2.guild.roles.everyone, { VIEW_CHANNEL: false });

      channel3.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: false });

      // channel4.permissionOverwrites.edit(channel1.guild.roles.everyone, { VIEW_CHANNEL: false });

      // channel5.permissionOverwrites.edit(channel2.guild.roles.everyone, { VIEW_CHANNEL: false });

      // channel6.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: false });

      // channel7.permissionOverwrites.edit(channel1.guild.roles.everyone, { VIEW_CHANNEL: false });

      // channel8.permissionOverwrites.edit(channel2.guild.roles.everyone, { VIEW_CHANNEL: false });

      // channel9.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: false });

      // channel10.permissionOverwrites.edit(channel3.guild.roles.everyone, { VIEW_CHANNEL: false });

      //////////

    });

   

  }

})

//// to reset all database // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async message => {

  if (message.content.startsWith("reset")) {

    await db1.clear("aa")

    await db1.clear("pp")

    await db1.clear("mm")

    await message.reply({ content: `Done remove a message ✅` })

  }

})

////// the menu for helping you and supporting you to understand the project have fun with Ahmed Sn Channel :) // the tuteriol here https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A

client.on("messageCreate", async (message) => {

  if (message.content.toLowerCase() === "help") {

    const embed1 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("قناتنا على اليوتيوب لفهم هذا البروجيكت")

      .setURL("https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A")

      .setDescription("** امر \n messageopen \n لتحديد رسالة عند فتح الرمات ** ")

    const embed2 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("قناتنا على اليوتيوب لفهم هذا البروجيكت")

      .setURL("https://www.youtube.com/channel/UCwY0RyQCsft-vcoiQHN_S7A")

      .setDescription("** امر **\n __messageclose__ \n** لتحديد رسالة قفل الرومات  **")

    const embed3 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("الصفحة الثالثة")

      .setDescription("**امر **\n __houropen__ \n **لتحديد ساعة فتح الرومات **")

    const embed4 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("الصفحة الرابعة")

      .setDescription("**امر **\n __minuteopen__ \n **لتحديد اى دقيقة يتم فتح الرومات مثال **\n** 12:__41__ الدقيقة المتحدد تحتها **")

    const embed5 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("الصفحة الخامسة")

      .setDescription("**امر \n __hourclose__ \n لتحديد ساعة قفل الرومات**")

    const embed6 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("الصفحة السادسة")

      .setDescription("**امر \n __minuteclose__ \n لتحديد دقيقة قفل الرومات**")

    const embed7 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("الصفحة السابعة")

      .setDescription("**امر **\n __start__ \n ** هذا الامر تكتبه فى الروم قفل وفتح لبدأ اللوب بفتح وقفل الرومات **")

    const embed8 = new MessageEmbed()

      .setColor("RANDOM")

      .setTitle("الصفحة الثامنة")

      .setDescription("**امر **\n __reset__ \n **لمسح كل شىء فى وحدة التخزين او لعمل ريسيت لوحدة التخزين**")

    const embedPages = new MessageButtonPages()

      .setEmbeds([embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8]) // Unlimited embed options

      .setDuration(150000) // Duration of page when stop

      .setReply(true, { replyMention: true }) // Reply the message!

      .setLabelButton(["◀", "⛔", "▶"])// Label of the button

    embedPages.build(message);

  }

});

client.login(`your token here`);

