var tmi = require('tmi.js');
var options = {
	options : {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "MemingoBot",
		password: "oauth:p60gni00gu9hxa2c6t9cqj4pr3vldn"
	},
	channels: ["prodigytt"]
};


var client = new tmi.client(options);
client.connect();


client.on('connected', function(address, port) {
	console.log("Address: " + address + " Port: " + port);
	client.action("prodigytt", "K onda k pez.")
})

client.on('chat', function(channerl, user, message, self) {

	if(message === '!ora'){
		client.action("prodigytt", user['display-name'] + " ORA PINCHES VERGAS. Kappa");
		//client.whisper("prodigytt", "ORA PINCHES VERGAS");
	}

	if(message === '!dank') {
		client.action("prodigytt", "👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌th 👌 ere👌👌👌 right✔there ✔✔if i do ƽaү so my selｆ 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit");
	}

	if(message === '!qt') {
		client.action("prodigytt", ':thinking: The year is 2034. QT lies on his death bed. As he lies there in his last breath he whispers: "Wow, that actually killed me." :thinking:');
	}

	if(message === '!clear'){
		client.clear("prodigytt");
	}
});