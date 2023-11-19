const { readFile, writeFile } = require('fs').promises;
const { Client } = require('fnbr');
const handleCommand = require('./utils/party');

(async () => {
    await console.log('Read README.md if you don\'t know what you\'re doing.');

    let auth;
    try {
        auth = {
            deviceAuth: JSON.parse(await readFile('./auth.json'))
        };
    } catch (e) {
        auth = {
            authorizationCode: async () => Client.consoleQuestion('Input authorization code: ')
        };
    }

    const client = new Client({
        auth
    });

    client.on('deviceauth:created', (da) => writeFile('./deviceAuth.json', JSON.stringify(da, null, 2)));
    client.on('party:member:message', handleCommand);
    client.on('friend:message', handleCommand);

    await client.login();
    console.log(`Logged in as \"${client.user.displayName}\"`);
})();