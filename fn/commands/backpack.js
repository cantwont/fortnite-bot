const { fetchCosmetic, getCosmeticPath } = require('../utils/api');

module.exports = async (m, args) => {
  const backpack = await fetchCosmetic(args.join(' '), 'backpack');

  if (!backpack) {
    await console.log(`The backpack ${args.join(' ')} wasn't found!`);
    return;
  }

  await m.client.party.me.setBackpack(backpack.id, undefined, getCosmeticPath(backpack.path));
  await console.log(`Set the pickaxe to ${backpack.name}!`);
};