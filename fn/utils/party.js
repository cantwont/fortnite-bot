const outfitCommand = require('../commands/outfit');
const emoteCommand = require('../commands/emote');
const levelCommand = require('../commands/level');
const crownsCommand = require('../commands/crowns');
const readyCommand = require('../commands/readiness');
const pickaxeCommand = require('../commands/pickaxe');
const backpackCommand = require('../commands/backpack');
const battlepassCommand = require('../commands/battlepass');

const handleCommand = async (m) => {
  if (!m.content.startsWith('!')) return;

  const args = m.content.slice(1).split(' ');
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'outfit':
    case 'skin':
        await outfitCommand(m, args);
        break;
    case 'emote':
    case 'dance':
        await emoteCommand(m, args);
        break;
    case 'level':
        await levelCommand(m, args);
        break;
    case 'crowns':
        await crownsCommand(m, args);
        break;
    case 'ready':
        await readyCommand(m, args);
        break;
    case 'pickaxe':
        await pickaxeCommand(m, args);
        break;
    case 'backpack':
    case 'backbling':
        await backpackCommand(m, args);
        break;
    case 'bp':
        await battlepassCommand(m, args);
        break;
    default:
        console.log(`Command not recognized!`)
  }
};

module.exports = handleCommand;