module.exports = async (m, args) => {
    const ready = args[0]

    if (!ready) {
        await console.log(`No crowns specified!`);
        return;
    }

    await m.client.party.me.setReadiness(ready);
    await console.log(`Set readiness to ${ready}!`);
};