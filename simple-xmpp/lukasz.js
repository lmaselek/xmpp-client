const { execSync } = require('child_process');

let host = execSync('echo $(terraform -chdir=/Users/lmaselek/lm-terraform output -raw load_balancer_url) | tr -d \'\n\'');
console.log(`Connect to ${host}`);

const xmpp = require("simple-xmpp");

xmpp.on("online", data => {
        console.log("Hey you are online")
        console.log(`Connected as ${data.jid.user}`)
        send()
        })

xmpp.on("error", error => console.log(`Something went wrong! ${error}`))

xmpp.on("chat", (from, message) => {
        console.log(`Got a message! ${message} from ${from}`)
        })

// xmpp.on("stanza", function(stanza) {
//         console.log(`Got a stanza! ${stanza}`)
//         })

// xmpp.on('groupchat', function(conference, from, message, stamp) {
//         console.log('%s says %s on %s on %s at %s', 
//                 from, message, conference, stamp.substr(0,9), stamp.substr(10));
//         });

function send() {
        setTimeout(send, 5000);
	const date = Date.now();
	const now = new Date(date);
        xmpp.send("admin@localhost", `hi! ${now.toUTCString()}`)
        }

xmpp.connect({
        "jid": "lukasz@localhost/luki_on_mac",
        "password": "password",
        "host": `${host}`,
        "port": "5222"
        })


