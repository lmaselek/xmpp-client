const { execSync } = require('child_process');

const dir = process.env.LM_TERRAFORM || '/Users/lmaselek/lm-terraform';
console.log(`terraform dir is ${dir}`);
let host = execSync(`echo $(terraform -chdir=${dir} output -raw load_balancer_url) | tr -d \'\n\'`);
console.log(`Connect to ${host}`);

const xmpp = require("simple-xmpp");

xmpp.on("online", data => {
        console.log("Hey you are online")
        console.log(`Connected as ${data.jid.user}`)
        // xmpp.subscribe('private@conference.localhost');
        // xmpp.setPresence('chat');
        send()
        })

xmpp.on("error", error => console.log(`Something went wrong! ${error}`))

xmpp.on("chat", (from, message) => {
        console.log(`Got a message! ${message} from ${from}`)
        })

xmpp.on('groupchat', function(conference, from, message, stamp) {
        console.log('%s says %s on %s on %s at %s', 
                from, message, conference, stamp.substr(0,9), stamp.substr(10));
        });

function send() {
        setTimeout(send, 5000);
	const date = Date.now();
	const now = new Date(date);
        xmpp.send("lukasz@localhost/example", `hi! ${now.toUTCString()}`)
        xmpp.send("private@conference.localhost", "Hello everybody!", true);
        }

xmpp.connect({
        "jid": "admin@localhost",
        "password": "password",
        "host": `${host}`,
        "port": "5222"
        })

