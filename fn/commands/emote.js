const { fetchCosmetic, getCosmeticPath } = require('../utils/api');

module.exports = async (m, args) => {
  const emote = await fetchCosmetic(args.join(' '), 'emote');

  if (!emote) {
    await console.log(`The emote ${args.join(' ')} wasn't found!`);
    return;
  }

  await m.client.party.me.setEmote(emote.id, getCosmeticPath(emote.path));
  await console.log(`Set the emote to ${emote.name}!`);
};