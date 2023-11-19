module.exports = async (m, args) => {
    const crowns = args[0]

    if (!crowns) {
        await console.log(`No crowns specified!`);
        return;
    }

    await m.client.party.me.setCrowns(crowns);
    await console.log(`Set the crowns to ${crowns}!`);
};