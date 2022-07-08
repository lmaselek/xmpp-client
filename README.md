# xmpp-client
XMPP client tools

For `simple-xmpp` client first install all dependencies:

`npm install simple-xmpp`

Scripts are checking terraform output for `load_balancer_url` parameter therefore be sure that you have corectly defined system parameter `LM_TERRAFORM`. 
Parameter must be set to the running `lm-terraform` project. If so then run the script `node admin.js` or `node lukasz.js`
