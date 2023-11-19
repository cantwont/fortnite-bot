module.exports = async (m, args) => {
    const purchased = args[0]
    const level = args[1]

    if (!args[0] || !args[1]) {
        await console.log(`No battlepass info supplied!`);
        return;
    }

    await m.client.party.me.setBattlepass(purchased, level, undefined, undefined);
    await console.log(`Set the battlepass info to: \nIs Purchased: ${purchased}\nBP Level: ${level}`);
};