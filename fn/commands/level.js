module.exports = async (m, args) => {
    const level = args[0]

    if (!level) {
        await console.log(`No level specified!`);
        return;
    }

    await m.client.party.me.setLevel(level);
    await console.log(`Set the level to ${level}!`);
};