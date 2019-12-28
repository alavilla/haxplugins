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
  name: `fixmap`,
  author: `salamini`,
  version: `1.0.0`,
  dependencies: [`sav/commands`],
};


room.onStadiumChange = function(stadiumName, byPlayer) {
  if(byPlayer.name != "Kozlov" &&  byPlayer.id != 0) {
    room.setDefaultStadium("Big");
  }
}



