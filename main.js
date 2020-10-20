const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "a!";
const ytdl = require("ytdl-core");
const YouTube = require('simple-youtube-api');
const youtube = (new YouTube("AIzaSyDhOavpb_E_U0Sk780W6QeB2PFxwoXv3XM"))
const queue = new Map();
var servers = {};
const os = require("os");




var online = "<:online:542846558518116389>"
var idle = "<:idle:542846584803819521>"
var dnd = "<:dnd:542846623106203689>"
var invisible = "<:invisible:542846648267702277>"
var oui = "<:oui:565668322893627395>"
var non = "<:non:565668366111735809>"
var infractions = "<:infractions:565668449590968321>"
var flechehaut = "<:flechehaut:552993096795815938>"
var police = "<:police:567849445190926346>"
var gears = "<:gears:567851904324075530>"
var machine = "<:machine:569320034883731467>"
var roles = "<:roles:552996198878019595>"
var config = "<:config:569325053574119447>"
var ticket = "<:ticket:569537887297863749>"
var bingo = "<:bingo:569643777455685653>"
var report = "<:report:569646411982045188>"
var confetti = "<:confetti:569647988985561106>"
var owner = "<:owner:567848780884475925>"
var dice = "<:dice:569652584114028544>"
var liens = "<:liens:569654125894303744>"
var leftarrow = "<:leftarrow:569462078574952459>"
var hashtag = "<:hashtag:569665517640482827>"
var identifiant = "<:identifiant:569667649257078787>"
var timebomb = "<:timebomb:656689591079927810>"
var memoire = "<:memoire:569671446079602692>"
var host = "<:host:569672625018634291>"
var serveur = "<:serveur:569676126922997761>"
var users = "<:users:569676906266492943>"
var dogtag = "<:dogtag:569678986205069332>"
var version = "<:version:569679086432157697>"
var created = "<:created:569679015028195363>"
var information = "<:information:569682289173331968>"
var rejoin = "<:rejoin:570322195784663071>"
var region = "<:region:570323453505437705>"
var membres = "<:membres:570326143681560590>"
var humains = "<:humains:570327449062211584>"
var salons = "<:salons:570345307716714522>"
var textuels = "<:textuels:570348339002998815>"
var vocaux = "<:vocaux:570349246310776832>"
var categorie = "<:categorie:570349956804902916>"
var happy = "<:happy:570351413390213140>"
var raison = "<:raison:604090466039758886>"
var shiel = "<:shiel:552997959160299525>"
var musicplayer = "<:musicplayer:612411411624362053>"
var linux = "<:linux:649406587546501165>"


client.login("votre token");


client.on("guildCreate", (guild)=> {

       
	let guild_create_embed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setDescription(`<a:loading:606280187469889589>` + "__**Nouveau Serveur**__ ",)
	.addField("• Nom "+ `${roles}`, "``"+guild.name+"``", true)
	.addField("• ID " + `${identifiant}`, "``"+guild.id+"``", true)
	.addField("• Propriétaire "+ `${owner}`, guild.owner.toString(), true)
	.addField("• Salons " + ":speech_balloon:", "``"+guild.channels.size+"`` *Salons totaux* \n``"+ guild.channels.filter(channel => channel.type === 'text').size +"`` *Salons textuels* \n``"+guild.channels.filter(channel => channel.type === 'voice').size+"`` *Salons vocaux*\n``"+guild.channels.filter(channel => channel.type === 'category').size+"`` *Catégories*", true)      
	.addField("• Membres "+ `${membres}`, "``"+guild.memberCount+"`` *Membres* \n``"+ guild.members.filter(m => ! m.user.bot).size +"`` *Humains* \n``"+guild.members.filter(m => m.user.bot).size+"`` *Bot*", true)  
	.addField("• Activité"+ ":beginner:", "``"+guild.members.filter(mem => mem.presence.status === "online").size+"`` *En ligne* \n``"+guild.members.filter(mem => mem.presence.status === "idle").size+"`` *Idle* \n``"+guild.members.filter(mem => mem.presence.status === "dnd").size+"`` *Ne pas déranger* \n``"+guild.members.filter(mem => mem.presence.status === "offline").size+"`` *Invisible* \n", true)      
	.addField("• Rôles " + `${shiel}`, "``"+guild.roles.size+"``", true)
	.addField("• Emojis "+ `${happy}`, "``"+guild.emojis.size+"``", true)
	.setFooter("Nouveau serveur vient d'ajouter Anaëlle").setTimestamp()
	client.channels.find('id', '612423588359962634').send(guild_create_embed).catch();
	client.channels.find('id', '612423335149830157').send(guild_create_embed).catch();
	client.channels.find('id', '612420916378337332').send(guild_create_embed).catch();
});

client.on("guildDelete", (guild)=> {

  
let guild_delete_embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`<a:loading:606280187469889589>` + "__**Ancien Serveur**__",)
.addField("• Nom "+ `${roles}`, "``"+guild.name+"``", true)
.addField("• ID " + `${identifiant}`, "``"+guild.id+"``", true)
.addField("• Propriétaire "+ `${owner}`, guild.owner.toString(), true)
.addField("• Membres "+ `${membres}`, "``"+guild.memberCount+"`` *Membres* \n``"+ guild.members.filter(m => ! m.user.bot).size +"`` *Humains* \n``"+guild.members.filter(m => m.user.bot).size+"`` *Bot*", true)  
.addField("• Activité"+ ":beginner:", "``"+guild.members.filter(mem => mem.presence.status === "online").size+"`` *En ligne* \n``"+guild.members.filter(mem => mem.presence.status === "idle").size+"`` *Idle* \n``"+guild.members.filter(mem => mem.presence.status === "dnd").size+"`` *Ne pas déranger* \n``"+guild.members.filter(mem => mem.presence.status === "offline").size+"`` *Invisible* \n", true)      
.setFooter("Un serveur vient de retirer Anaëlle").setTimestamp()
client.channels.find('id', '612423588359962634').send(guild_delete_embed).catch();
client.channels.find('id', '612423335149830157').send(guild_delete_embed).catch();
client.channels.find('id', '612420916378337332').send(guild_delete_embed).catch();
});

client.on('ready', () => {
	client.user.setActivity(`a!help | ${client.guilds.size} serveurs`, { type: 'LISTENING' })
    console.log("Anaëlle est prête !")
  });


  client.on("message", async message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "play":
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send(`<a:cross1:597843201012793344> Connectez vous dans un salon vocal puis réessayez !`);
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send(`<a:cross1:597843201012793344> Erreur veuillez vérifier que j'ai bien les permissions pour me connecter a un salon vocal !`);
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send(`<a:cross1:597843201012793344> Erreur veuillez vérifier que j'ai bien les permissions pour parler dans un salon vocal !`);
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`<a:yes:597843252095221761> Playlist : **${playlist.title}** vient d'être ajoutée a la playlist avec succès !`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					var index = 0;
					message.channel.send(`
__**Sélections des**__
${videos.map(video2 => `**${++index} •** ${video2.title}`).join('\n')}
***Entrer un chiffre entre 1 et 10 svp***
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send(`<a:cross1:597843201012793344> Pas de sélection défini ou un erreur c'est produit, J'annule la sélection.`);
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send(`<a:cross1:597843201012793344> Je n'ai obtenu aucun résultats`);
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "skip":
		if (!message.member.voiceChannel) return message.channel.send(`<a:cross1:597843201012793344> Veuillez utiliser cette commande quand vous serez dans un salon vocal`);
		if (!serverQueue) return message.channel.send(`<a:cross1:597843201012793344> Désoler il y a pas de musiques dans la playlist je peut pas passer a un autre musique`);
		message.channel.send(`⏭ Je passe a la prochaine musique`);
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
        break;
      case "stop":
		if (!message.member.voiceChannel) return message.channel.send(`<a:cross1:597843201012793344> Veuillez utiliser cette commande quand vous serez dans un salon vocal`);
		if (!serverQueue) return message.channel.send(`<a:cross1:597843201012793344> Désoler il y a pas de musiques dans la playlist je peut pas arrêter la un musique`);
		serverQueue.songs = [];
		message.channel.send(`⏹ Je vient d'arrêter toute les musiques`);
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
break;
      case "volume":
		if (!message.member.voiceChannel) return message.channel.send(`<a:cross1:597843201012793344> Veuillez utiliser cette commande quand vous serez dans un salon vocal`);
		if (!serverQueue) return message.channel.send(`<a:cross1:597843201012793344> Euhh il y a aucune musique en train de jouer...`);
		if (!args[1]) return message.channel.send(`🔊 Volume est à **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`🔊 Volume changé à **${args[1]}**`);
break;
      case "np":
		if (!serverQueue) return message.channel.send(`<a:cross1:597843201012793344> Il y a rien qui est en train de jouer`);
		return message.channel.send(`🎶 Now playing : **${serverQueue.songs[0].title}**`);
break;
      case "queue":
		if (!serverQueue) return message.channel.send(`<a:cross1:597843201012793344> Il y a aucune musiques dans la queue`);
		return message.channel.send(`
__**Playlist**__
${serverQueue.songs.map(song => `**•** ${song.title}`).join('\n')}
**🎶 Now playing : ** ${serverQueue.songs[0].title}
		`);
break;
      case "pause":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send(`⏸ La musique a été pause avec succès`);
		}
		return message.channel.send(`<a:cross1:597843201012793344> Erreur il y a aucune musique en train de jouer impossible de mettre en pause la musique`);
break;
      case "resume":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send(`▶ J'ai remis la musique pour toi avec succès !`);
		}
		return message.channel.send(`<a:cross1:597843201012793344> Erreur il y a aucune musique en train de jouer impossible de remettre la musique`);
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`<a:cross1:597843201012793344> Je peut pas rejoindre ce salon ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`<a:yes:597843252095221761> **${song.title}** a bien été ajoutée a la playlist avec succès`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      message.channel.send('```Musique terminer```');
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Now playing : **${song.title}**`);
	}
  
if(message.content.startsWith(prefix + "help")) {
	var help_embed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setThumbnail(message.author.avatarURL)
	.addField(`${dnd} | ${idle} | ${online}`, "Bugs | En constructions | Opérationel")
	.addField(`${online} | ${musicplayer} <a:rainbow1:597936911239217162> Musique`,'`play <votre chanson>` | `skip` | `stop` | `np` | `pause` | `resume` | `queue` | `volume <volume désiré>`')
	.addField(`${online} | ${machine} <a:rainbow1:597936911239217162> Bot`,'`bot-info` | `ping` | `uptime` | `patch-notes`')
	.addField(`${online} | ${liens} <a:rainbow1:597936911239217162> Liens`,'[Invite Anaïs](https://discordapp.com/oauth2/authorize?client_id=611687595445059605&scope=bot&permissions=2146958841) | `[Voter Anaïs en constructions]` | [Support Anaïs](https://discord.gg/d4BS4dn)')
	.addField(`${infractions} <a:rainbow1:597936911239217162> Important`,"Si vous avez cette erreur ***Je n'ai obtenu aucun résultats*** pas de panique c'est que vous avez épuiser Anaïs il vous faudras attendre ***Minuit PT genre 2 ou 3hrs am pour pouvoir écouter de la musique***")
	.setFooter(`Demandé par ${message.author.username}`)
	.setTimestamp()
	message.channel.send(help_embed);
	console.log("Un utilisateur a effectuer la commande d'aide !")
}

if(message.content === prefix + "patch-notes"){
	var patchnote_embed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setTitle(`<a:loading:606280187469889589> | Patch notes version 1.0.1 d'Anaëlle`)
	.setThumbnail(message.author.avatarURL)
	.addField("Nouveautés :", "1. Ajouts de quelque émoji pour faire plus propre \n2. Optimisation des commandes")
	.addField("Bug fix :", "1. Oui, bugs fix sur la commande play, skip et stop")
	.setFooter(`Patch notes d'Anaïs ${message.author.username}`)
	.setTimestamp()
	message.channel.send(patchnote_embed);
	console.log("quelq'un a fait la commande de patch-notes")
  }

  if(message.content.startsWith(prefix + "uptime")) {
	var hrs = Math.round(client.uptime / (1000 * 60 * 60)) + " heures(s),"
	var mins = " " + Math.round(client.uptime / (1000 * 60)) % 60 + " minute(s), "
	var sec = Math.round(client.uptime / 1000) % 60 + " seconde(s)"
	if (hrs == "0 heures(s),") hrs = ""
	if (mins == " 0 minute(s), ") mins = ""
	let uptime = hrs+mins+sec
	
	let em = new Discord.RichEmbed()
	.setTitle(`**${client.user.username} Uptime**\n`)
	.setDescription(`**Joue de la musique sur ${client.guilds.size} serveurs pendant ${uptime} !**`)
	.setColor("RANDOM")
	.setTimestamp()
	.setFooter(`Demandé par ${message.author.username}.`)
	message.channel.send({embed: em})
  }

  if(message.content === prefix + "bot-info"){
	let bicon = client.user.displayAvatarURL;
	let aicon = message.author.displayAvatarURL;
	  var info_embed = new Discord.RichEmbed()
	  .setColor("RANDOM")
	  .setThumbnail(bicon)
	  .setTitle(`${information} | Infos sur Anaëlle`)
	  .addField(`${hashtag} <a:rainbow1:597936911239217162> Descriminateur du bot`, `#${client.user.discriminator}`)
	  .addField(`${identifiant} <a:rainbow1:597936911239217162> ID`, `${client.user.id}`)
	  .addField(`${timebomb} <a:rainbow1:597936911239217162> Uptime`, Math.round(client.uptime / (1000 * 60 * 60)) + " heures, " + Math.round(client.uptime / (1000 * 60)) % 60 + " minutes, et " + Math.round(client.uptime / 1000) % 60 + " secondes", true)
	  .addField(`${serveur} <a:rainbow1:597936911239217162> Nombres de serveur que je joue de la musique`, `${client.guilds.size}`)
	  .addField(`${users} <a:rainbow1:597936911239217162> Nombres d'utilisateur`, `${client.users.size}`)
	  .addField(`${machine} <a:rainbow1:597936911239217162> Le nom du bot`, client.user.username)
	  .addField(`${created} <a:rainbow1:597936911239217162> Codé par`, "[♛๖̶ζ͜͡Jean0™㋡ 💎| TD/IP#1070]")
	  .addField(`${timebomb} <a:rainbow1:597936911239217162> Anaïs a été créé le`, client.user.createdAt)
	  .addField(`${version} <a:rainbow1:597936911239217162> Version d'Anaïs`, "1.0.1")
	  .addField(`${linux} <a:rainbow1:597936911239217162> Système d'anaïs`, `CPU ❱ \`${(os.loadavg()[0]*os.cpus().length/100).toFixed(2)}%\` | Ram ❱ \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\` | Plateforme ❱ \`${process.platform}\`\n\n\`\`\`(${os.arch()}) ${os.cpus()[0].model}\`\`\``)
	  .addField(`${host} <a:rainbow1:597936911239217162> Héberger sur`, "Par un pôte")
	  .setFooter("Info - sur le bot", aicon)
	  .setTimestamp()
	  message.channel.send(info_embed)
	  console.log("Un utilisateur a effectuer la commande d'infobot !")
  }

  if(message.content.startsWith(prefix + "ping")) {
	let startTime = Date.now();
	var speedTest = require('speedtest-net');
    var speed = speedTest();
    message.channel.send("En cours de calculation ...").then((msg) => {
      speed.on('data',async data => {  
        let embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setDescription(`${machine} | Ping d'anaëlle : ***` + ((new Date() - message.createdTimestamp)/200).toFixed(0) + ` ms***\n💓 | Ping de l\'API : ***` + Math.round(client.ping).toFixed(0) + `  ms***\n${serveur} | Ping du vps : ***`+data.server.ping + `  ms***\n`)
         .setFooter(`Upload : ${data.speeds.upload} | Download : ${data.speeds.download}`)
         //.setFooter(`Demandé par ${message.author.username}`)
         .setTimestamp()
         msg.edit("Voici les résultat des ping",embed)
       }) ;
    })
  }

})

