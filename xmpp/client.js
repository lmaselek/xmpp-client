const { client, xml } = require("@xmpp/client");
// const debug = require("@xmpp/debug");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const xmpp = client({
  service: "xmpp://ec2-44-204-153-176.compute-1.amazonaws.com:5222",
  domain: "localhost",
  resource: "example",
  username: "admin",
  password: "password",
});

//debug(xmpp, true);

xmpp.on("error", (err) => {
  console.error(err);
});

xmpp.on("offline", () => {
  console.log("offline");
});

// xmpp.on("stanza", async (stanza) => {
//   if (stanza.is("message")) {
//     // await xmpp.send(xml("presence", { type: "unavailable" }));
//     await xmpp.stop();
//   }
//   console.log("stanza");

// });

xmpp.on("online", async (address) => {
  console.log("online");
  // await xmpp.send(xml("presence"));

  // Sends a chat message to itself
  const message = xml(
    "message",
    { type: "chat", to: "lukasz@localhost" },
    xml("body", {}, "hello world"),
  );
  await xmpp.send(message);
  await xmpp.stop();

});

xmpp.start().catch(console.error);
