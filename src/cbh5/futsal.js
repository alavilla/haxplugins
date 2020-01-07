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
  name: `futsal`,
  author: `alavilla/kozlov`,
  version: `1.0.0`,
  dependencies: [`sav/commands`],
  config: {
	map:2
  },
};


var futsal = `{

	
{

	"name" : "Futsal X4  (Bazinga!)",

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

room.onRoomLink = function() {
  room.onStadiumChange();
}

room.onStadiumChange = function(stadiumName, byPlayer) {
  if(byPlayer != null && byPlayer.name != "Kozlov" &&  byPlayer.id != 0) {
    switch(room.getConfig().map) {
      case 1:
        room.setCustomStadium(handball);
        break;
      case 2:
        room.setCustomStadium(futsal);
        break;
      default:
        room.setDefaultStadium("Big");	
	console.log(room.getConfig().map);
    }
  }
}


