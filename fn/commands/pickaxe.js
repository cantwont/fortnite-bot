const { fetchCosmetic, getCosmeticPath } = require('../utils/api');

module.exports = async (m, args) => {
  const pickaxe = await fetchCosmetic(args.join(' '), 'pickaxe');

  if (!pickaxe) {
    await console.log(`The pickaxe ${args.join(' ')} wasn't found!`);
    return;
  }

  await m.client.party.me.setPickaxe(pickaxe.id, undefined, getCosmeticPath(pickaxe.path));
  await console.log(`Set the pickaxe to ${pickaxe.name}!`);
};