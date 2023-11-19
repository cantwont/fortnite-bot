const { fetchCosmetic, getCosmeticPath } = require('../utils/api');

module.exports = async (m, args) => {
  const skin = await fetchCosmetic(args.join(' '), 'outfit');

  if (!skin) {
    await console.log(`The skin ${args.join(' ')} wasn't found!`);
    return;
  }

  await m.client.party.me.setOutfit(skin.id, undefined, undefined, getCosmeticPath(skin.path));
  await console.log(`Set the skin to ${skin.name}!`);
};