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
  author: `alavilla/kozlov`,
  version: `1.0.0`,
  dependencies: [`sav/commands`],
  config: {
  },
};

var futsal = `{
{

	"name" : "Futsal X4  haxbr.com",

	"canBeStored" : false,

	"width" : 770,

	"height" : 350,

	"bg" : { "type" : "hockey", "width" : 700, "height" : 320, "kickOffRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 700, "y" : 320, "cMask" : ["ball" ] },
		/* 1 */ { "x" : 700, "y" : -320, "cMask" : ["ball" ] },
		/* 2 */ { "x" : 0, "y" : 350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0 },
		/* 3 */ { "x" : 0, "y" : 90, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0 },
		/* 4 */ { "x" : 0, "y" : -90, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 5 */ { "x" : 0, "y" : -350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 6 */ { "x" : -700, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 7 */ { "x" : -740, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 8 */ { "x" : -740, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "pos" : [-700,90 ] },
		/* 9 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "pos" : [-700,90 ] },
		/* 10 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 11 */ { "x" : 740, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 12 */ { "x" : 740, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "pos" : [700,90 ] },
		/* 13 */ { "x" : 700, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "pos" : [700,90 ] },
		/* 14 */ { "x" : -700, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "pos" : [-700,90 ] },
		/* 15 */ { "x" : -700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 16 */ { "x" : -700, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 17 */ { "x" : -700, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 18 */ { "x" : -700, "y" : 320, "cMask" : ["ball" ] },
		/* 19 */ { "x" : 700, "y" : 320, "cMask" : ["ball" ] },
		/* 20 */ { "x" : 700, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "pos" : [700,90 ] },
		/* 21 */ { "x" : 700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 22 */ { "x" : 700, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 23 */ { "x" : 700, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 24 */ { "x" : 700, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 25 */ { "x" : 700, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 26 */ { "x" : -700, "y" : -320, "cMask" : ["ball" ] },
		/* 27 */ { "x" : 700, "y" : -320, "cMask" : ["ball" ] },
		/* 28 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 29 */ { "x" : 0, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 30 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0 },
		/* 31 */ { "x" : 0, "y" : 320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "curve" : 0 },
		/* 32 */ { "x" : 0, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 33 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 34 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 35 */ { "x" : 0, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 36 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 37 */ { "x" : 0, "y" : -90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 38 */ { "x" : -706.25, "y" : 90, "cMask" : ["ball" ], "pos" : [-700,90 ] },
		/* 39 */ { "x" : -706.25, "y" : 320, "cMask" : ["ball" ] },
		/* 40 */ { "x" : -706.25, "y" : -320, "cMask" : ["ball" ] },
		/* 41 */ { "x" : -706.25, "y" : -90, "cMask" : ["ball" ] },
		/* 42 */ { "x" : 706.25, "y" : -90, "cMask" : ["ball" ] },
		/* 43 */ { "x" : 706.25, "y" : -320, "cMask" : ["ball" ] },
		/* 44 */ { "x" : 706.25, "y" : 320, "cMask" : ["ball" ], "pos" : [700,90 ] },
		/* 45 */ { "x" : 706.25, "y" : 90, "cMask" : ["ball" ] },
		/* 46 */ { "x" : 0, "y" : -90, "bCoef" : 0.1, "cMask" : [ ] },
		/* 47 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : [ ] },
		/* 48 */ { "x" : -700, "y" : -90, "bCoef" : 0.1, "cMask" : [ ] },
		/* 49 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : [ ], "pos" : [-700,90 ] },
		/* 50 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : [ ] },
		/* 51 */ { "x" : 700, "y" : 90, "bCoef" : 0.1, "cMask" : [ ], "pos" : [700,90 ] },
		/* 52 */ { "x" : -350, "y" : 322, "bCoef" : 0.1, "cMask" : [ ] },
		/* 53 */ { "x" : -350, "y" : 340, "bCoef" : 0.1, "cMask" : [ ] },
		/* 54 */ { "x" : -700, "y" : 290, "bCoef" : 0.1, "cMask" : [ ], "curve" : 93 },
		/* 55 */ { "x" : -490, "y" : 80, "bCoef" : 0.1, "cMask" : [ ], "curve" : 93 },
		/* 56 */ { "x" : -700, "y" : -290, "bCoef" : 0.1, "cMask" : [ ], "curve" : 93 },
		/* 57 */ { "x" : -490, "y" : -80, "bCoef" : 0.1, "cMask" : [ ], "curve" : 93 },
		/* 58 */ { "x" : -702, "y" : 195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 59 */ { "x" : -720, "y" : 195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 60 */ { "x" : 702, "y" : 195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 61 */ { "x" : 720, "y" : 195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 62 */ { "x" : -702, "y" : -195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 63 */ { "x" : -720, "y" : -195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 64 */ { "x" : 702, "y" : -195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 65 */ { "x" : 720, "y" : -195, "bCoef" : 0.1, "cMask" : [ ] },
		/* 66 */ { "x" : -350, "y" : -322, "bCoef" : 0.1, "cMask" : [ ] },
		/* 67 */ { "x" : -350, "y" : -340, "bCoef" : 0.1, "cMask" : [ ] },
		/* 68 */ { "x" : 350, "y" : 322, "bCoef" : 0.1, "cMask" : [ ] },
		/* 69 */ { "x" : 350, "y" : 340, "bCoef" : 0.1, "cMask" : [ ] },
		/* 70 */ { "x" : 350, "y" : -322, "bCoef" : 0.1, "cMask" : [ ] },
		/* 71 */ { "x" : 350, "y" : -340, "bCoef" : 0.1, "cMask" : [ ] },
		/* 72 */ { "x" : 700, "y" : 290, "bCoef" : 0.1, "cMask" : [ ], "curve" : 90 },
		/* 73 */ { "x" : 490, "y" : 80, "bCoef" : 0.1, "cMask" : [ ], "curve" : 90 },
		/* 74 */ { "x" : 700, "y" : -290, "bCoef" : 0.1, "cMask" : [ ], "curve" : 90 },
		/* 75 */ { "x" : 490, "y" : -80, "bCoef" : 0.1, "cMask" : [ ], "curve" : 90 },
		/* 76 */ { "x" : 490, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 77 */ { "x" : 490, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 78 */ { "x" : -490, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 79 */ { "x" : -490, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 80 */ { "x" : -490, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 81 */ { "x" : -490, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 82 */ { "x" : -490, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 83 */ { "x" : -490, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 84 */ { "x" : -490, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 85 */ { "x" : -490, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 86 */ { "x" : 490, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 87 */ { "x" : 490, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 88 */ { "x" : 490, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 89 */ { "x" : 490, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 90 */ { "x" : 490, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 91 */ { "x" : 490, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 92 */ { "x" : 490, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 93 */ { "x" : 490, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 94 */ { "x" : 0, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 95 */ { "x" : 0, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 96 */ { "x" : 0, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 97 */ { "x" : 0, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 98 */ { "x" : 0, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 99 */ { "x" : 0, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 100 */ { "x" : 0, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 101 */ { "x" : 0, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 102 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -65, "y" : -344.5, "curve" : 0, "color" : "FFFFFF" },
		/* 103 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -64, "y" : -319, "curve" : 0, "color" : "FFFFFF" },
		/* 104 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -56, "y" : -329, "curve" : -80, "color" : "FFFFFF" },
		/* 105 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -60, "y" : -336, "curve" : -80, "color" : "FFFFFF" },
		/* 106 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -64, "y" : -329, "curve" : -80, "color" : "FFFFFF" },
		/* 107 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -55.5, "y" : -319, "color" : "FFFFFF" },
		/* 108 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -55.5, "y" : -329, "curve" : -105, "color" : "FFFFFF" },
		/* 109 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -41, "y" : -328.28570556640625, "color" : "FFFFFF" },
		/* 110 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -47.85711669921875, "y" : -328.28570556640625, "color" : "FFFFFF" },
		/* 111 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -39.5, "y" : -324.28570556640625, "color" : "FFFFFF" },
		/* 112 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -40.5, "y" : -333.28570556640625, "color" : "FFFFFF" },
		/* 113 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -49, "y" : -334, "color" : "FFFFFF" },
		/* 114 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -37, "y" : -321, "color" : "FFFFFF" },
		/* 115 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -32, "y" : -338, "color" : "FFFFFF" },
		/* 116 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -20, "y" : -320, "color" : "FFFFFF" },
		/* 117 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -32, "y" : -320, "color" : "FFFFFF" },
		/* 118 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -21, "y" : -338, "color" : "FFFFFF" },
		/* 119 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -13, "y" : -345.5, "curve" : 0, "color" : "FFFFFF" },
		/* 120 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -12, "y" : -320, "curve" : 0, "color" : "FFFFFF" },
		/* 121 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -4, "y" : -330, "curve" : -123, "color" : "FFFFFF" },
		/* 122 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -8, "y" : -337, "curve" : -123, "color" : "FFFFFF" },
		/* 123 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -12, "y" : -330, "curve" : -80, "color" : "FFFFFF" },
		/* 124 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -11.999969482421875, "y" : -323.5, "color" : "FFFFFF" },
		/* 125 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 5.000030517578125, "y" : -338, "color" : "FFFFFF" },
		/* 126 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 5.000030517578125, "y" : -320.5714285969734, "color" : "FFFFFF" },
		/* 127 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 5.5, "y" : -333, "color" : "FFFFFF" },
		/* 128 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 14, "y" : -336, "color" : "FFFFFF" },
		/* 129 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 18, "y" : -323, "curve" : 180, "color" : "FFFFFF" },
		/* 130 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 18, "y" : -322, "curve" : 180, "color" : "FFFFFF" },
		/* 131 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 37, "y" : -335.5, "curve" : -233, "color" : "FFFFFF" },
		/* 132 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 37, "y" : -321.5714285969734, "curve" : -233, "color" : "FFFFFF" },
		/* 133 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 49, "y" : -335, "curve" : -180, "color" : "FFFFFF" },
		/* 134 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 49, "y" : -320.5714285969734, "curve" : -180, "color" : "FFFFFF" },
		/* 135 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 64, "y" : -320, "color" : "FFFFFF" },
		/* 136 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 64, "y" : -337, "color" : "FFFFFF" },
		/* 137 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 76, "y" : -337, "color" : "FFFFFF" },
		/* 138 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 76, "y" : -320, "color" : "FFFFFF" },
		/* 139 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 63.5, "y" : -336, "color" : "FFFFFF" },
		/* 140 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 70.5, "y" : -329.5, "color" : "FFFFFF" },
		/* 141 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 76.5, "y" : -336, "color" : "FFFFFF" },
		/* 142 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 69, "y" : -329, "color" : "FFFFFF" },
		/* 143 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 76.5, "y" : -336, "color" : "FFFFFF" }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "y" : -90 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 8, "v1" : 9, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "pos" : [-700,90 ], "y" : 90 },
		{ "v0" : 10, "v1" : 11, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "y" : -90 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 12, "v1" : 13, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "pos" : [700,90 ], "y" : 90 },
		{ "v0" : 2, "v1" : 3, "curve" : 0, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 4, "v1" : 3, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 14, "v1" : 15, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 16, "v1" : 17, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 18, "v1" : 19, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 20, "v1" : 21, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 22, "v1" : 23, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 24, "v1" : 25, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 26, "v1" : 27, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 28, "v1" : 29, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 30, "v1" : 31, "curve" : 0, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 38, "v1" : 39, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ], "x" : -706.25 },
		{ "v0" : 40, "v1" : 41, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ], "x" : -706.25 },
		{ "v0" : 42, "v1" : 43, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ], "x" : 706.25 },
		{ "v0" : 44, "v1" : 45, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ], "x" : 706.25 },
		{ "v0" : 46, "v1" : 47, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 48, "v1" : 49, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 50, "v1" : 51, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 52, "v1" : 53, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "x" : -350 },
		{ "v0" : 55, "v1" : 54, "curve" : 93, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 56, "v1" : 57, "curve" : 93, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 55, "v1" : 57, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "x" : -490 },
		{ "v0" : 58, "v1" : 59, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "y" : 195 },
		{ "v0" : 60, "v1" : 61, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "y" : 195 },
		{ "v0" : 62, "v1" : 63, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "y" : -195 },
		{ "v0" : 64, "v1" : 65, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "y" : -195 },
		{ "v0" : 66, "v1" : 67, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "x" : -350 },
		{ "v0" : 68, "v1" : 69, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "x" : 350 },
		{ "v0" : 70, "v1" : 71, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "x" : 350 },
		{ "v0" : 72, "v1" : 73, "curve" : 90, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 75, "v1" : 74, "curve" : 90, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 76, "v1" : 77, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "x" : 490 },
		{ "v0" : 79, "v1" : 78, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 78, "v1" : 79, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 81, "v1" : 80, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 80, "v1" : 81, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 83, "v1" : 82, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 82, "v1" : 83, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 85, "v1" : 84, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 84, "v1" : 85, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -490 },
		{ "v0" : 87, "v1" : 86, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 86, "v1" : 87, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 89, "v1" : 88, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 88, "v1" : 89, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 91, "v1" : 90, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 90, "v1" : 91, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 93, "v1" : 92, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 92, "v1" : 93, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 490 },
		{ "v0" : 95, "v1" : 94, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "v0" : 94, "v1" : 95, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "v0" : 97, "v1" : 96, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "v0" : 96, "v1" : 97, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "v0" : 99, "v1" : 98, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "v0" : 98, "v1" : 99, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "v0" : 101, "v1" : 100, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "v0" : 100, "v1" : 101, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 0 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 102, "v1" : 103 },
		{ "curve" : -80, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 104, "v1" : 105 },
		{ "curve" : -80, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 105, "v1" : 106 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 107, "v1" : 108, "x" : 33.5 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 109, "v1" : 110, "curve" : -101.812282227541 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 110, "v1" : 111, "curve" : -197.55822095655785 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 109, "v1" : 112, "curve" : -58.58272434196852 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 112, "v1" : 113, "curve" : -162.58525945695905 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 109, "v1" : 114, "curve" : -56.140412444584875 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 115, "v1" : 116 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 117, "v1" : 118 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 119, "v1" : 120 },
		{ "curve" : -123, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 121, "v1" : 122 },
		{ "curve" : -80, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 122, "v1" : 123 },
		{ "curve" : 161.0458757969322, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 121, "v1" : 124 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 125, "v1" : 126 },
		{ "curve" : 77.62276807352987, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 127, "v1" : 128 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 129, "v1" : 130, "curve" : 180 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 130, "v1" : 129, "curve" : 180 },
		{ "curve" : -233, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 131, "v1" : 132 },
		{ "curve" : -180, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 133, "v1" : 134, "x" : 435 },
		{ "curve" : -180, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 134, "v1" : 133, "x" : 435 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 135, "v1" : 136 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 137, "v1" : 138 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 139, "v1" : 140 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 142, "v1" : 143 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -317.5, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -317.5, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -770, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -770, "bCoef" : 0.1 }

	],

	"goals" : [
		{ "p0" : [-707.5,-90 ], "p1" : [-707.5,90 ], "team" : "red" },
		{ "p0" : [707.5,90 ], "p1" : [707.5,-90 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "invMass" : 0, "pos" : [-700,90 ], "color" : "FFFFFF" },
		{ "radius" : 5, "invMass" : 0, "pos" : [-700,-90 ], "color" : "FFFFFF", "y" : -90 },
		{ "radius" : 5, "invMass" : 0, "pos" : [700,90 ], "color" : "FFFFFF" },
		{ "radius" : 5, "invMass" : 0, "pos" : [700,-90 ], "color" : "FFFFFF", "y" : -90 }

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"color" : "FFCC00"

	},

	"spawnDistance" : 350,

	"traits" : {
		

	}
}

}`
var handball = `{

	"name" : "Handball X4 haxbr.com",

	"canBeStored" : false,

	"width" : 760,

	"height" : 350,

	"bg" : { "type" : "hockey" },

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : -350, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 1 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		
		/* 2 */ { "x" : 700, "y" : 320, "trait" : "ballArea", "color" : "ffffff" },
		/* 3 */ { "x" : 700, "y" : -320, "trait" : "ballArea", "color" : "ffffff" },
		
		/* 4 */ { "x" : -700, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,-80 ] },
		/* 5 */ { "x" : -730, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,-80 ] },
		/* 6 */ { "x" : -730, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,80 ] },
		/* 7 */ { "x" : -700, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,80 ] },
		/* 8 */ { "x" : 700, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,-90 ] },
		/* 9 */ { "x" : 730, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,-90 ] },
		/* 10 */ { "x" : 730, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,80 ] },
		/* 11 */ { "x" : 700, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,80 ] },
		
		/* 12 */ { "x" : -700, "y" : 100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "pos" : [-700,80 ] },
		/* 13 */ { "x" : -700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 14 */ { "x" : -700, "y" : -100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "pos" : [-700,-80 ] },
		/* 15 */ { "x" : -700, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 16 */ { "x" : -700, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 17 */ { "x" : 700, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 18 */ { "x" : 700, "y" : 100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "ffffff" },
		/* 19 */ { "x" : 700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 20 */ { "x" : 700, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 21 */ { "x" : 700, "y" : -100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "pos" : [700,-90 ] },
		/* 22 */ { "x" : 700, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 23 */ { "x" : 700, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 24 */ { "x" : -700, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 25 */ { "x" : 700, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "ffffff" },
		/* 26 */ { "x" : -708.8, "y" : 100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ], "color" : "ffffff" },
		/* 27 */ { "x" : -708.8, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "ffffff" },
		/* 28 */ { "x" : -708.8, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "color" : "ffffff" },
		/* 29 */ { "x" : -708.8, "y" : -100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ], "color" : "ffffff" },
		/* 30 */ { "x" : 708.8, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "color" : "ffffff" },
		/* 31 */ { "x" : 708.8, "y" : -100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-90 ], "color" : "ffffff" },
		/* 32 */ { "x" : 708.8, "y" : 100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ], "color" : "ffffff" },
		/* 33 */ { "x" : 708.8, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "ffffff" },
		
		/* 34 */ { "x" : -700, "y" : -100, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 35 */ { "x" : -700, "y" : 100, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 36 */ { "x" : 700, "y" : -100, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF", "pos" : [700,-90 ] },
		/* 37 */ { "x" : 700, "y" : 100, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFFFF" },
		/* 38 */ { "x" : -700, "y" : 280, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732 },
		/* 39 */ { "x" : -480, "y" : 60, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732 },
		/* 40 */ { "x" : -700, "y" : -280, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732 },
		/* 41 */ { "x" : -480, "y" : -60, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732 },
		/* 42 */ { "x" : 700, "y" : 280, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732 },
		/* 43 */ { "x" : 480, "y" : 70, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732 },
		/* 44 */ { "x" : 700, "y" : -280, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732 },
		/* 45 */ { "x" : 480, "y" : -70, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732 },
		/* 46 */ { "x" : 480, "y" : 70, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 47 */ { "x" : 480, "y" : -70, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 48 */ { "x" : -700, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,-80 ], "vis" : false },
		/* 49 */ { "x" : -730, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,-80 ], "vis" : false },
		/* 50 */ { "x" : -730, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,80 ], "vis" : false },
		/* 51 */ { "x" : -700, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [-700,80 ], "vis" : false },
		/* 52 */ { "x" : 700, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,-90 ], "vis" : false },
		/* 53 */ { "x" : 730, "y" : -100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,-90 ], "vis" : false },
		/* 54 */ { "x" : 730, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,80 ], "vis" : false },
		/* 55 */ { "x" : 700, "y" : 100, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "curve" : 0, "color" : "ffffff", "pos" : [700,80 ], "vis" : false },
		
		/* 56 */ { "x" : 0, "y" : 320, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 57 */ { "x" : 0, "y" : 350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 58 */ { "x" : 0, "y" : 100, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "FFFFFF" },
		/* 59 */ { "x" : 0, "y" : -100, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "FFFFFF" },
		/* 60 */ { "x" : 0, "y" : 100, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "FFFFFF" },
		/* 61 */ { "x" : 0, "y" : -100, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "FFFFFF" },
		/* 62 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff" },
		/* 63 */ { "x" : 0, "y" : 100, "cMask" : [ ], "color" : "ffffff" },
		/* 64 */ { "x" : 0, "y" : 100, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff" },
		
		/* 65 */ { "x" : 0, "y" : 101, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "555555", "curve" : -180 },
		/* 66 */ { "x" : 0, "y" : 101, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "555555", "curve" : 180 },
		
		/* 67 */ { "x" : 0, "y" : -100, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "696969" },
		/* 68 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff" },
		
		/* 69 */ { "x" : -698, "y" : -230, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : 93 },
		/* 70 */ { "x" : -698, "y" : 230, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : -93 },
		/* 71 */ { "x" : -530, "y" : 60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : -93 },
		/* 72 */ { "x" : -530, "y" : -60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : 93 },
		/* 73 */ { "x" : -530, "y" : 60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : -93.24160881282732 },
		/* 74 */ { "x" : -530, "y" : -60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : 93.24160881282732 },
		/* 75 */ { "x" : -505, "y" : 20, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732 },
		/* 76 */ { "x" : -505, "y" : -20, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732 },
		/* 77 */ { "x" : -698, "y" : -231, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : 93 },
		/* 78 */ { "x" : -698, "y" : 231, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : -93 },
		/* 79 */ { "x" : -529, "y" : 60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : -93 },
		/* 80 */ { "x" : -529, "y" : -60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : 93 },
		/* 81 */ { "x" : -529, "y" : 60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : -93.24160881282732 },
		/* 82 */ { "x" : -529, "y" : -60, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : 93.24160881282732 },
		/* 83 */ { "x" : 698, "y" : -230, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : 93 },
		/* 84 */ { "x" : 698, "y" : 230, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : -93 },
		/* 85 */ { "x" : 530, "y" : 70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : -93 },
		/* 86 */ { "x" : 530, "y" : -70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : 93 },
		/* 87 */ { "x" : 530, "y" : 70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : 0 },
		/* 88 */ { "x" : 530, "y" : -70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "FFFFFF", "curve" : 0 },
		/* 89 */ { "x" : 698, "y" : -231, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : 93 },
		/* 90 */ { "x" : 698, "y" : 231, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : -93 },
		/* 91 */ { "x" : 529, "y" : 70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : -93 },
		/* 92 */ { "x" : 529, "y" : -70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : 93 },
		/* 93 */ { "x" : 529, "y" : 70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : 0 },
		/* 94 */ { "x" : 529, "y" : -70, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "color" : "555555", "curve" : 0 },
		/* 95 */ { "x" : 505, "y" : 20, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732 },
		/* 96 */ { "x" : 505, "y" : -20, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732 },
		/* 97 */ { "x" : -700, "y" : -100, "bCoef" : 0.1, "cMask" : ["wall","blue" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732, "vis" : false },
		/* 98 */ { "x" : -700, "y" : -230, "bCoef" : 0.1, "cMask" : ["wall","blue" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732, "vis" : false },
		/* 99 */ { "x" : 700, "y" : -100, "bCoef" : 0.1, "cMask" : ["wall","red" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732, "vis" : false },
		/* 100 */ { "x" : 700, "y" : -230, "bCoef" : 0.1, "cMask" : ["wall","red" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732, "vis" : false },
		/* 101 */ { "x" : 700, "y" : 230, "bCoef" : 0.1, "cMask" : ["wall","red" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732, "vis" : false },
		/* 102 */ { "x" : 700, "y" : 100, "bCoef" : 0.1, "cMask" : ["wall","red" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732, "vis" : false },
		/* 103 */ { "x" : -700, "y" : 230, "bCoef" : 0.1, "cMask" : ["wall","blue" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732, "vis" : false },
		/* 104 */ { "x" : -700, "y" : 100, "bCoef" : 0.1, "cMask" : ["wall","blue" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732, "vis" : false },
		
		/* 105 */ { "x" : 700, "y" : 100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "pos" : [-700,80 ] },
		/* 106 */ { "x" : 700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 107 */ { "x" : 700, "y" : -100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "pos" : [-700,-80 ] },
		/* 108 */ { "x" : 700, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 109 */ { "x" : 700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "pos" : [-700,-80 ] },
		/* 110 */ { "x" : 700, "y" : 100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 111 */ { "x" : -700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "pos" : [-700,-80 ] },
		/* 112 */ { "x" : -700, "y" : 100, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff" },
		/* 113 */ { "x" : -708.8, "y" : 100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ], "color" : "ffffff" },
		/* 114 */ { "x" : -708.8, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "ffffff" },
		/* 115 */ { "x" : -708.8, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "color" : "ffffff" },
		/* 116 */ { "x" : -708.8, "y" : -100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ], "color" : "ffffff" },
		/* 117 */ { "x" : 708.8, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "color" : "ffffff" },
		/* 118 */ { "x" : 708.8, "y" : -100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-90 ], "color" : "ffffff" },
		/* 119 */ { "x" : 708.8, "y" : 100, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ], "color" : "ffffff" },
		/* 120 */ { "x" : 708.8, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "ffffff" },
		
		/* 121 */ { "x" : 0, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		/* 122 */ { "x" : 0, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		/* 123 */ { "x" : 0, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		/* 124 */ { "x" : 0, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		/* 125 */ { "x" : 0, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		/* 126 */ { "x" : 0, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		/* 127 */ { "x" : 0, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		/* 128 */ { "x" : 0, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "cMask" : ["wall" ] },
		
		/* 129 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -67, "y" : -344.5, "curve" : 0, "color" : "FFFFFF" },
		/* 130 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -66, "y" : -319, "curve" : 0, "color" : "FFFFFF" },
		/* 131 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -58, "y" : -329, "curve" : -80, "color" : "FFFFFF" },
		/* 132 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -62, "y" : -336, "curve" : -80, "color" : "FFFFFF" },
		/* 133 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -66, "y" : -329, "curve" : -80, "color" : "FFFFFF" },
		/* 134 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -57.5, "y" : -319, "color" : "FFFFFF" },
		/* 135 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -57.5, "y" : -329, "curve" : -105, "color" : "FFFFFF" },
		/* 136 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -43, "y" : -328.28570556640625, "color" : "FFFFFF" },
		/* 137 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -49.85711669921875, "y" : -328.28570556640625, "color" : "FFFFFF" },
		/* 138 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -41.5, "y" : -324.28570556640625, "color" : "FFFFFF" },
		/* 139 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -42.5, "y" : -333.28570556640625, "color" : "FFFFFF" },
		/* 140 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -51, "y" : -334, "color" : "FFFFFF" },
		/* 141 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -39, "y" : -321, "color" : "FFFFFF" },
		/* 142 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -34, "y" : -338, "color" : "FFFFFF" },
		/* 143 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -22, "y" : -320, "color" : "FFFFFF" },
		/* 144 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -34, "y" : -320, "color" : "FFFFFF" },
		/* 145 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -23, "y" : -338, "color" : "FFFFFF" },
		/* 146 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -15, "y" : -345.5, "curve" : 0, "color" : "FFFFFF" },
		/* 147 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -14, "y" : -320, "curve" : 0, "color" : "FFFFFF" },
		/* 148 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -6, "y" : -330, "curve" : -123, "color" : "FFFFFF" },
		/* 149 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -10, "y" : -337, "curve" : -123, "color" : "FFFFFF" },
		/* 150 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -14, "y" : -330, "curve" : -80, "color" : "FFFFFF" },
		/* 151 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : -13.999969482421875, "y" : -323.5, "color" : "FFFFFF" },
		/* 152 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 3.000030517578125, "y" : -338, "color" : "FFFFFF" },
		/* 153 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 3.000030517578125, "y" : -320.5714285969734, "color" : "FFFFFF" },
		/* 154 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 3.5, "y" : -333, "color" : "FFFFFF" },
		/* 155 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 12, "y" : -336, "color" : "FFFFFF" },
		/* 156 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 16, "y" : -323, "curve" : 180, "color" : "FFFFFF" },
		/* 157 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 16, "y" : -322, "curve" : 180, "color" : "FFFFFF" },
		/* 158 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 35, "y" : -335.5, "curve" : -233, "color" : "FFFFFF" },
		/* 159 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 35, "y" : -321.5714285969734, "curve" : -233, "color" : "FFFFFF" },
		/* 160 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 47, "y" : -335, "curve" : -180, "color" : "FFFFFF" },
		/* 161 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 47, "y" : -320.5714285969734, "curve" : -180, "color" : "FFFFFF" },
		/* 162 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 62, "y" : -320, "color" : "FFFFFF" },
		/* 163 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 62, "y" : -337, "color" : "FFFFFF" },
		/* 164 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 74, "y" : -337, "color" : "FFFFFF" },
		/* 165 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 74, "y" : -320, "color" : "FFFFFF" },
		/* 166 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 61.5, "y" : -336, "color" : "FFFFFF" },
		/* 167 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 68.5, "y" : -329.5, "color" : "FFFFFF" },
		/* 168 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 74.5, "y" : -336, "color" : "FFFFFF" },
		/* 169 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 67, "y" : -329, "color" : "FFFFFF" },
		/* 170 */ { "bCoef" : 1, "cMask" : ["wall" ], "x" : 74.5, "y" : -336, "color" : "FFFFFF" },
		/* 171 */ { "x" : 0, "y" : 320, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "696969" },
		/* 172 */ { "x" : 0, "y" : 100, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff" },
		
		/* 173 */ { "x" : 0, "y" : 100, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : -93.24160881282732 },
		/* 174 */ { "x" : 0, "y" : -100, "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 93.24160881282732 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		
		{ "v0" : 4, "v1" : 5, "curve" : 0, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [-700,-80 ], "y" : -100 },
		{ "v0" : 5, "v1" : 6, "curve" : 0, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "x" : -580 },
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [-700,80 ], "y" : 100 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [700,-90 ], "y" : -100 },
		{ "v0" : 9, "v1" : 10, "curve" : 0, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "x" : 580 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [700,80 ], "y" : 100 },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "ffffff", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 24, "v1" : 25, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -708.8 },
		{ "v0" : 28, "v1" : 29, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -708.8 },
		{ "v0" : 30, "v1" : 31, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 708.8 },
		{ "v0" : 32, "v1" : 33, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 708.8 },
		
		{ "v0" : 34, "v1" : 35, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "x" : -550 },
		{ "v0" : 36, "v1" : 37, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "x" : 550 },
		{ "v0" : 38, "v1" : 39, "curve" : -93.24160881282732, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 40, "v1" : 41, "curve" : 93.24160881282732, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 39, "v1" : 41, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "x" : -480 },
		{ "v0" : 42, "v1" : 43, "curve" : 93.24160881282732, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 44, "v1" : 45, "curve" : -93.24160881282732, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "x" : 480 },
		
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [-700,-80 ], "y" : -100 },
		{ "v0" : 49, "v1" : 50, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "x" : -580 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [-700,80 ], "y" : 100 },
		{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [700,-90 ], "y" : -100 },
		{ "v0" : 53, "v1" : 54, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "x" : 580 },
		{ "v0" : 54, "v1" : 55, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "trait" : "goalPost", "pos" : [700,80 ], "y" : 100 },
		
		{ "v0" : 56, "v1" : 57, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 58, "v1" : 59, "curve" : 179.42829117403488, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 0.004989142083090878 },
		{ "v0" : 61, "v1" : 60, "curve" : 180, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 68, "v1" : 67, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 69, "v1" : 72, "curve" : 93, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		{ "v0" : 70, "v1" : 71, "curve" : -93, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		
		{ "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "x" : -530 },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "x" : -505 },
		
		{ "v0" : 77, "v1" : 80, "curve" : 93, "vis" : true, "color" : "555555", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		{ "v0" : 78, "v1" : 79, "curve" : -93, "vis" : true, "color" : "555555", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		
		{ "v0" : 81, "v1" : 82, "curve" : 0, "vis" : true, "color" : "555555", "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "x" : -529 },
		
		{ "v0" : 85, "v1" : 84, "curve" : -93, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		{ "v0" : 86, "v1" : 83, "curve" : 93, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		
		{ "v0" : 87, "v1" : 88, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "x" : 530 },
		
		{ "v0" : 91, "v1" : 90, "curve" : -93, "vis" : true, "color" : "555555", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		{ "v0" : 92, "v1" : 89, "curve" : 93, "vis" : true, "color" : "555555", "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		
		{ "v0" : 93, "v1" : 94, "curve" : 0, "vis" : true, "color" : "555555", "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "line", "x" : 529 },
		{ "v0" : 95, "v1" : 96, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "x" : 505 },
		{ "v0" : 97, "v1" : 98, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall","blue" ], "trait" : "line", "x" : -700 },
		{ "v0" : 99, "v1" : 100, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall","red" ], "trait" : "line", "x" : 700 },
		{ "v0" : 101, "v1" : 102, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall","red" ], "trait" : "line", "x" : 700 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall","blue" ], "trait" : "line", "x" : -700 },
		
		{ "v0" : 107, "v1" : 108, "vis" : true, "color" : "ffffff", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700 },
		{ "v0" : 109, "v1" : 110, "vis" : true, "color" : "ffffff", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700 },
		{ "v0" : 111, "v1" : 112, "vis" : true, "color" : "ffffff", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -708.8 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -708.8 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 708.8 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 708.8 },
		
		{ "v0" : 122, "v1" : 121, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		{ "v0" : 121, "v1" : 122, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		{ "v0" : 124, "v1" : 123, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		{ "v0" : 123, "v1" : 124, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		{ "v0" : 126, "v1" : 125, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		{ "v0" : 125, "v1" : 126, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		{ "v0" : 128, "v1" : 127, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		{ "v0" : 127, "v1" : 128, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0, "cMask" : ["wall" ] },
		
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 129, "v1" : 130 },
		{ "curve" : -80, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 131, "v1" : 132 },
		{ "curve" : -80, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 132, "v1" : 133 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 134, "v1" : 135, "x" : 33.5 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 136, "v1" : 137, "curve" : -101.812282227541 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 137, "v1" : 138, "curve" : -197.55822095655785 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 136, "v1" : 139, "curve" : -58.58272434196852 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 139, "v1" : 140, "curve" : -162.58525945695905 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 136, "v1" : 141, "curve" : -56.140412444584875 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 142, "v1" : 143 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 144, "v1" : 145 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 146, "v1" : 147 },
		{ "curve" : -123, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 148, "v1" : 149 },
		{ "curve" : -80, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 149, "v1" : 150 },
		{ "curve" : 161.0458757969322, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 148, "v1" : 151 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 152, "v1" : 153 },
		{ "curve" : 77.62276807352987, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 154, "v1" : 155 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 156, "v1" : 157, "curve" : 180 },
		{ "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 157, "v1" : 156, "curve" : 180 },
		{ "curve" : -233, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 158, "v1" : 159 },
		{ "curve" : -180, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 160, "v1" : 161, "x" : 435 },
		{ "curve" : -180, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 161, "v1" : 160, "x" : 435 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 162, "v1" : 163 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 164, "v1" : 165 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 166, "v1" : 167 },
		{ "curve" : 0, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["wall" ], "v0" : 169, "v1" : 170 },
		{ "v0" : 172, "v1" : 171, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "x" : 0 },
		
		{ "v0" : 173, "v1" : 174, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "trait" : "line", "x" : 0 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -760.1, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -320, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -760.1, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -320, "cMask" : ["ball" ] }

	],

	"goals" : [
		{ "p0" : [-708.8,-100 ], "p1" : [-708.8,100 ], "team" : "red", "color" : "ffffff" },
		{ "p0" : [708.8,100 ], "p1" : [708.8,-100 ], "team" : "blue", "color" : "ffffff" }

	],

	"discs" : [
		{ "radius" : 8, "invMass" : 0, "pos" : [-700,100 ], "color" : "ffffff", "trait" : "goalPost", "y" : 100 },
		{ "radius" : 8, "invMass" : 0, "pos" : [-700,-100 ], "color" : "ffffff", "trait" : "goalPost", "y" : -100, "x" : -560 },
		{ "radius" : 8, "invMass" : 0, "pos" : [700,100 ], "color" : "ffffff", "trait" : "goalPost", "y" : 100 },
		{ "radius" : 8, "invMass" : 0, "pos" : [700,-100 ], "color" : "ffffff", "trait" : "goalPost", "y" : -100, "vis" : true }

	],

	"playerPhysics" : {
		"bCoef" : 0.1,
		"kickStrength" : 6.15

	},

	"ballPhysics" : {
		"radius" : 8.8,
		"bCoef" : 0.4,
		"color" : "FEBA01"

	},

	"spawnDistance" : 350,

	"traits" : {
		

	}
}`


  if (room.roomName === "TESTING") {
    room.setCustomStadium(handball)
    map = 1
  }
  else
  {
	  
room.setCustomStadium(futsal)
    map = 2
  }



room.onStadiumChange = function(stadiumName, byPlayer) {
  if(byPlayer.name != "Kozlov" &&  byPlayer.id != 0) {

switch(map) {
  case 1:
    room.setCustomStadium(handball);
    break;
  case 2:
    room.setCustomStadium(futsal);
    break;
  default:
    room.setDefaultStadium("Big");
}	  
	  
	  
	  
    
  }
}


