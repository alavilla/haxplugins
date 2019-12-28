/**
 * Allows to set custom maps that can be listed and loaded using room commands.
 * To use the commands the user must have admin.
 * 
 * The hr/game-mode plugin will automatically allow the maps set with this
 * plugin.
 * 
 * Commands:
 *   !maps (lists maps)
 *   !setmap [mapName] (changes the map to given map)
 * 
 * The original plugin was made by Herna
 * https://github.com/XHerna/hhm-plugins/blob/master/src/tut/maps.js
 * 
 * Adaptado por Lavilla Alejandro para Haxball Brasil.
 */
const room = HBInit();

room.pluginSpec = {
  name: `al/setmap`,
  author: `salamini`,
  version: `1.0.0`,
  dependencies: [`sav/commands`],
  incompatible_with: [`tut/maps`],
  config: {
    maps: {}
	 
  }
};

const DEFAULT_MAPS = [
];



room.onCommand_setmap = (player, args) => {
  if (!isAdmin(player)) return;
  let mapName = args.join(" ");
  if (!setMap(mapName)) {
    room.sendAnnouncement("Map not found.", player.id, 0xff0000);
  }
};

function isAdmin(player) {
  if (!player.admin) {
    room.sendAnnouncement(
      "alejandrinho!",
      player.id,
      0xff0000
    );
    return false;
  }
  return true;
}

function setMap(mapName) {
  let maps = room.getConfig("maps");
  if (DEFAULT_MAPS.includes(mapName)) {
    room.setDefaultStadium(mapName);
    return true;
  } else if (Object.keys(maps).includes(mapName)) {
    room.setCustomStadium(maps[mapName]);
    return true;
  } else {
    return false;
  }
}

function displayMaps(id) {
  let maps = room.getConfig("maps");
  let output = "Maps:\n";
  for (let key in maps) {
    output += `${key}, `;
  }
  output = output.slice(0, -2);
  room.sendAnnouncement(output, id, 0xdf9eff);
}

/**
 * Replace multiple spaces with one so that the onCommand_setmap handler works
 * for sure. It uses Array.prototype.join(' ') to join the arguments together.
 */
function sanitizeMapNames() {
  let maps = room.getConfig("maps");
  let newMaps = {};
  let regex = new RegExp("  ");
  for (let key in maps) {
    let newKey = key.replace(regex, " ");
    newMaps[newKey] = maps[key];
  }
  room.setConfig("maps", newMaps);
}

room.onRoomLink = () => {
  room.setMap = setMap;
  sanitizeMapNames();

  let help = room.getPlugin(`sav/help`);
  if (help) {
    help.registerHelp(`maps`, ` (lists available custom maps)`);
    help.registerHelp(`setmap`, ` MAP_NAME (changes the map)`);
  }
};




