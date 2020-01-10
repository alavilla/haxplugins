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


var real = `{

	"name" : "\ud835\udde5\ud835\uddd8\ud835\uddd4\ud835\udddf \ud835\udde6\ud835\udde2\ud835\uddd6\ud835\uddd6\ud835\uddd8\ud835\udde5 \ud835\ude23\ud835\ude3a \u0040\ud835\udda6\ud835\uddcb\ud835\uddba\ud835\uddc7\ud835\uddbd\ud835\uddbe\ud835\uddcc\ud835\uddab\ud835\uddc2\ud835\uddc0\ud835\uddba\ud835\uddcc\ud835\udda0\ud835\uddb1\ud835\udda6",

	"width" : 1500,

	"height" : 734,

	"spawnDistance" : 300,

	"bg" : { "type" : "grass", "width" : 1150, "height" : 600, "kickOffRadius" : 180, "cornerRadius" : 0 },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"radius" : 10,
		"bCoef" : 0.5,
		"invMass" : 1,
		"damping" : 0.99,
		"color" : "FFFFFF",
		"cMask" : [ "all"
		],
		"cGroup" : [ "ball"
		]

	},

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 660, "trait" : "kickOffBarrier" },
		/* 1 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "C7E6BD" },
		/* 2 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "C7E6BD" },
		/* 3 */ { "x" : 0, "y" : -660, "trait" : "kickOffBarrier" },
		
		/* 4 */ { "x" : 1150, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 5 */ { "x" : 840, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 6 */ { "x" : 1150, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 7 */ { "x" : 840, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 8 */ { "x" : 1150, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 9 */ { "x" : 1031, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 10 */ { "x" : 1150, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 11 */ { "x" : 1029, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 12 */ { "x" : 840, "y" : -170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 13 */ { "x" : 840, "y" : 170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 14 */ { "x" : -1150, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 15 */ { "x" : -840, "y" : -337, "trait" : "line", "color" : "b3d4a7" },
		/* 16 */ { "x" : -1150, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 17 */ { "x" : -840, "y" : 337, "trait" : "line", "color" : "b3d4a7" },
		/* 18 */ { "x" : -1150, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 19 */ { "x" : -1030, "y" : -198, "trait" : "line", "color" : "b3d4a7" },
		/* 20 */ { "x" : -1150, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 21 */ { "x" : -1030, "y" : 198, "trait" : "line", "color" : "b3d4a7" },
		/* 22 */ { "x" : -840, "y" : 170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 23 */ { "x" : -840, "y" : -170, "trait" : "line", "curve" : -110, "color" : "b3d4a7" },
		/* 24 */ { "x" : 935, "y" : 4, "trait" : "line", "color" : "a7cf9b" },
		/* 25 */ { "x" : 935, "y" : -4, "trait" : "line", "color" : "a7cf9b" },
		/* 26 */ { "x" : -935, "y" : 4, "trait" : "line", "color" : "a7cf9b" },
		/* 27 */ { "x" : -935, "y" : -4, "trait" : "line", "color" : "a7cf9b" },
		/* 28 */ { "x" : -1150, "y" : 574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 29 */ { "x" : -1125, "y" : 599, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 30 */ { "x" : -1125, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 31 */ { "x" : -1150, "y" : -575, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 32 */ { "x" : 1124, "y" : 600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 33 */ { "x" : 1150, "y" : 574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 34 */ { "x" : 1150, "y" : -574, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7" },
		/* 35 */ { "x" : 1124, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "b3d4a7" },
		/* 36 */ { "x" : 0, "y" : -4, "trait" : "line", "color" : "b3d4a7" },
		/* 37 */ { "x" : 0, "y" : 4, "trait" : "line", "color" : "b3d4a7" },
		/* 38 */ { "x" : 0, "y" : -4, "trait" : "line", "color" : "b3d4a7" },
		/* 39 */ { "x" : 0, "y" : 4, "trait" : "line", "color" : "b3d4a7" },
		/* 40 */ { "x" : -1170, "y" : 150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 41 */ { "x" : -1170, "y" : 250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 42 */ { "x" : 1170, "y" : 150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 43 */ { "x" : 1170, "y" : 250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 44 */ { "x" : -1170, "y" : -150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 45 */ { "x" : -1170, "y" : -250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 46 */ { "x" : 1170, "y" : -150, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 47 */ { "x" : 1170, "y" : -250, "bCoef" : -4.5, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "576C46" },
		/* 48 */ { "x" : 1161, "y" : -599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 49 */ { "x" : 1189, "y" : -579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 50 */ { "x" : 1161, "y" : 599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 51 */ { "x" : 1189, "y" : 579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 52 */ { "x" : -1162, "y" : 599, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 53 */ { "x" : -1190, "y" : 579, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : -60, "color" : "576C46" },
		/* 54 */ { "x" : -1162, "y" : -600, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		/* 55 */ { "x" : -1190, "y" : -580, "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line", "curve" : 60, "color" : "576C46" },
		
		/* 56 */ { "x" : -1177, "y" : -250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 57 */ { "x" : -1177, "y" : -150, "cMask" : ["ball" ] },
		
		/* 58 */ { "x" : -1170, "y" : 250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 59 */ { "x" : -1177, "y" : 250, "bCoef" : 0, "cMask" : ["ball" ] },
		
		/* 60 */ { "x" : -1170, "y" : 150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 61 */ { "x" : -1177, "y" : 150, "cMask" : ["ball" ] },
		/* 62 */ { "x" : 1177, "y" : -250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 63 */ { "x" : 1177, "y" : -150, "cMask" : ["ball" ] },
		
		/* 64 */ { "x" : 1170, "y" : -150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 65 */ { "x" : 1170, "y" : -250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 66 */ { "x" : 1177, "y" : 250, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 67 */ { "x" : 1177, "y" : 150, "cMask" : ["ball" ] },
		
		/* 68 */ { "x" : 1170, "y" : 250, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		/* 69 */ { "x" : 1170, "y" : 150, "bCoef" : -5, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "576C46" },
		
		/* 70 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : -180 },
		/* 71 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : -180 },
		/* 72 */ { "x" : 0, "y" : -180, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 73 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : 0 },
		/* 74 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "b3d4a7", "vis" : true, "curve" : 0 },
		/* 75 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 76 */ { "x" : 0, "y" : 180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		/* 77 */ { "x" : 0, "y" : -180, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "C7E6BD", "vis" : true, "curve" : 0 },
		
		/* 78 */ { "x" : -818, "y" : -600, "trait" : "line", "curve" : 90, "color" : "638750" },
		/* 79 */ { "x" : -1150, "y" : -347, "trait" : "line", "curve" : 90, "color" : "638750" },
		/* 80 */ { "x" : -1150, "y" : 347, "trait" : "line", "color" : "638750" },
		/* 81 */ { "x" : -820, "y" : 600, "trait" : "line", "color" : "638750" },
		/* 82 */ { "x" : 820, "y" : 600, "trait" : "line", "color" : "638750" },
		/* 83 */ { "x" : 1150, "y" : 347, "trait" : "line", "color" : "638750" },
		/* 84 */ { "x" : 820, "y" : -600, "trait" : "line", "curve" : -90, "color" : "638750" },
		/* 85 */ { "x" : 1150, "y" : -347, "trait" : "line", "curve" : -90, "color" : "638750" },
		/* 86 */ { "x" : 1150, "y" : -475, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 87 */ { "x" : -1150, "y" : -475, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 88 */ { "x" : 1150, "y" : 475, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 89 */ { "x" : -1150, "y" : 475, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "638750" },
		/* 90 */ { "x" : -1150, "y" : -600, "trait" : "line", "color" : "b3d4a7" },
		/* 91 */ { "x" : -1150, "y" : 600, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFFF00" },
		/* 92 */ { "x" : 1150, "y" : 600, "trait" : "line", "color" : "b3d4a7" },
		/* 93 */ { "x" : 1150, "y" : -600, "trait" : "line", "color" : "b3d4a7" },
		
		/* 94 */ { "x" : -1416, "y" : -475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 95 */ { "x" : -1300, "y" : -475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 96 */ { "x" : -1300, "y" : 475, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 97 */ { "x" : -1416, "y" : 475, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 98 */ { "x" : -1414, "y" : -475, "trait" : "kickOffBarrier" },
		/* 99 */ { "x" : -1300, "y" : -475, "trait" : "kickOffBarrier" },
		/* 100 */ { "x" : -1300, "y" : 475, "trait" : "kickOffBarrier" },
		/* 101 */ { "x" : -1416, "y" : 475, "trait" : "kickOffBarrier" },
		
		/* 102 */ { "x" : -1356, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 103 */ { "x" : -1356, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 104 */ { "x" : -1361, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 105 */ { "x" : -1351, "y" : -76, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 106 */ { "x" : -1361, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 107 */ { "x" : -1351, "y" : 84, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 108 */ { "x" : -1410, "y" : -76, "bCoef" : 0, "cMask" : ["red" ] },
		/* 109 */ { "x" : -1410, "y" : 84, "bCoef" : 0, "cMask" : ["red" ] },
		/* 110 */ { "x" : 1400, "y" : -475, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		/* 111 */ { "x" : 1300, "y" : -475, "bCoef" : 0, "cMask" : ["red" ] },
		/* 112 */ { "x" : 1300, "y" : 475, "bCoef" : 0, "cMask" : ["red" ] },
		/* 113 */ { "x" : 1400, "y" : 475, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		
		/* 114 */ { "x" : 1400, "y" : -475, "trait" : "kickOffBarrier", "dist" : -1400 },
		/* 115 */ { "x" : 1300, "y" : -475, "trait" : "kickOffBarrier" },
		/* 116 */ { "x" : 1300, "y" : 475, "trait" : "kickOffBarrier" },
		/* 117 */ { "x" : 1400, "y" : 475, "trait" : "kickOffBarrier", "dist" : -1400 },
		
		/* 118 */ { "x" : 1345, "y" : -82, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 119 */ { "x" : 1345, "y" : 78, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 120 */ { "x" : 1350, "y" : -82, "bCoef" : 0, "cMask" : ["red" ] },
		/* 121 */ { "x" : 1340, "y" : -82, "bCoef" : 0, "cMask" : ["red" ] },
		/* 122 */ { "x" : 1350, "y" : 78, "bCoef" : 0, "cMask" : ["red" ] },
		/* 123 */ { "x" : 1340, "y" : 78, "bCoef" : 0, "cMask" : ["red" ] },
		/* 124 */ { "x" : 1410, "y" : -82, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 125 */ { "x" : 1410, "y" : 78, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 126 */ { "x" : 1150, "y" : -120.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7", "curve" : 0 },
		/* 127 */ { "x" : 1212.8375029631984, "y" : -120.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 128 */ { "x" : 1150.1431278225696, "y" : 116.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 129 */ { "x" : 1212.9145962189946, "y" : 116.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 130 */ { "x" : 1150, "y" : 116.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "curve" : 0, "color" : "b3d4a7" },
		/* 131 */ { "x" : 1259, "y" : -148.867722739, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 132 */ { "x" : 1259.5, "y" : 144, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 133 */ { "x" : 1213.8375029631984, "y" : -118.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 134 */ { "x" : 1260, "y" : -146.867722739, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 135 */ { "x" : 1211.8375029631984, "y" : -122.92552225676228, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 136 */ { "x" : 1258, "y" : -150.867722739, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 137 */ { "x" : 1214.9145962189946, "y" : 114.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 138 */ { "x" : 1261.5, "y" : 142, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 139 */ { "x" : 1213.9145962189946, "y" : 119.05779951814779, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 140 */ { "x" : 1260.5, "y" : 147, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 141 */ { "x" : 1150, "y" : -120, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "C7E6BD", "curve" : 0 },
		/* 142 */ { "x" : 1213, "y" : -120, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 143 */ { "x" : 1150, "y" : 116, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 144 */ { "x" : 1213, "y" : 116, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 145 */ { "x" : -1150, "y" : 118.00879788978456, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "b3d4a7", "curve" : 0 },
		/* 146 */ { "x" : -1213.3215131279903, "y" : 117.74394897515494, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 147 */ { "x" : -1149.628852252629, "y" : -118.97302216202547, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 148 */ { "x" : -1212.3997630875529, "y" : -119.23759275268432, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 149 */ { "x" : -1150, "y" : -118.97241890367377, "bCoef" : 0, "cMask" : ["wall" ], "curve" : 0, "color" : "b3d4a7" },
		/* 150 */ { "x" : -1259.6013715431845, "y" : 145.49133453725509, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 151 */ { "x" : -1258.866981665902, "y" : -147.37589424369935, "bCoef" : 0, "cMask" : ["wall" ], "color" : "ffffff" },
		
		/* 152 */ { "x" : -1214.3130746008003, "y" : 115.73975191756831, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 153 */ { "x" : -1260.5929330159947, "y" : 143.48713747966846, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 154 */ { "x" : -1212.3299516551804, "y" : 119.74814603274154, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 155 */ { "x" : -1258.6098100703748, "y" : 147.4955315948417, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 156 */ { "x" : -1214.4081749675327, "y" : -117.24604016227767, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 157 */ { "x" : -1260.8753935458817, "y" : -145.3843416532927, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 158 */ { "x" : -1213.3871097379695, "y" : -122.24178092786758, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "708a5a", "curve" : 0 },
		
		/* 159 */ { "x" : -1259.8543283163185, "y" : -150.3800824188826, "bCoef" : 0, "cMask" : ["wall" ], "color" : "708a5a" },
		
		/* 160 */ { "x" : -1150.4806674009055, "y" : 117.08328385388425, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "C7E6BD", "curve" : 0 },
		/* 161 */ { "x" : -1213.4801078094943, "y" : 116.81775004310506, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 162 */ { "x" : -1149.485969316082, "y" : -118.91461989892463, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		/* 163 */ { "x" : -1212.4854097246707, "y" : -119.1801537097038, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "ffffff", "curve" : 0 },
		
		/* 164 */ { "x" : 80.06046236735585, "y" : 736 },
		/* 165 */ { "x" : 80.06046236735585, "y" : 724 },
		
		/* 166 */ { "x" : -1150, "y" : -602, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 167 */ { "x" : -1150, "y" : -620.49609375, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 168 */ { "x" : -1148, "y" : -620.49609375, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 169 */ { "x" : -1148, "y" : -602, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 170 */ { "x" : -1159, "y" : -624, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E", "_selected" : true },
		
		/* 171 */ { "x" : -1149, "y" : -624, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49", "_selected" : true },
		
		/* 172 */ { "x" : -1168, "y" : -624, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E", "_selected" : true },
		/* 173 */ { "x" : -1159, "y" : -620.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E", "_selected" : true },
		
		/* 174 */ { "x" : -1168, "y" : -620.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49", "_selected" : true },
		
		/* 175 */ { "x" : -1149, "y" : -620.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E", "_selected" : true },
		
		/* 176 */ { "x" : -70, "y" : 667, "color" : "ffffff" },
		/* 177 */ { "x" : -90, "y" : 667, "color" : "ffffff" },
		/* 178 */ { "x" : -70, "y" : 687, "color" : "ffffff" },
		/* 179 */ { "x" : -110, "y" : 667 },
		/* 180 */ { "x" : -130, "y" : 667 },
		/* 181 */ { "x" : -150, "y" : 667 },
		/* 182 */ { "x" : -170, "y" : 667 },
		/* 183 */ { "x" : -190, "y" : 667 },
		/* 184 */ { "x" : -210, "y" : 667 },
		/* 185 */ { "x" : -230, "y" : 667 },
		/* 186 */ { "x" : -250, "y" : 667 },
		/* 187 */ { "x" : -287.01500879340676, "y" : 667, "color" : "ffffff" },
		/* 188 */ { "x" : -286.93953763264415, "y" : 687, "color" : "ffffff" },
		/* 189 */ { "x" : -270, "y" : 667, "color" : "ffffff" },
		/* 190 */ { "x" : -286.93953763264415, "y" : 736 },
		/* 191 */ { "x" : -286.93953763264415, "y" : 724 },
		/* 192 */ { "x" : -286.93953763264415, "y" : 710 },
		/* 193 */ { "x" : -286.93953763264415, "y" : 698 },
		/* 194 */ { "x" : -70, "y" : 734.04149391746 },
		/* 195 */ { "x" : -70, "y" : 722.0417049239776 },
		/* 196 */ { "x" : -70, "y" : 710 },
		/* 197 */ { "x" : -70, "y" : 698 },
		/* 198 */ { "x" : 297, "y" : 667, "color" : "ffffff" },
		/* 199 */ { "x" : 277, "y" : 667, "color" : "ffffff" },
		/* 200 */ { "x" : 297, "y" : 687, "color" : "ffffff" },
		/* 201 */ { "x" : 257, "y" : 667 },
		/* 202 */ { "x" : 237, "y" : 667 },
		/* 203 */ { "x" : 217, "y" : 667 },
		/* 204 */ { "x" : 197, "y" : 667 },
		/* 205 */ { "x" : 177, "y" : 667 },
		/* 206 */ { "x" : 157, "y" : 667 },
		/* 207 */ { "x" : 137, "y" : 667 },
		/* 208 */ { "x" : 117, "y" : 667 },
		/* 209 */ { "x" : 79.98499120659324, "y" : 667, "color" : "ffffff" },
		/* 210 */ { "x" : 80.06046236735585, "y" : 687, "color" : "ffffff" },
		/* 211 */ { "x" : 97, "y" : 667, "color" : "ffffff" },
		/* 212 */ { "x" : 80.06046236735585, "y" : 736 },
		/* 213 */ { "x" : 80.06046236735585, "y" : 724 },
		/* 214 */ { "x" : 80.06046236735585, "y" : 710 },
		/* 215 */ { "x" : 80.06046236735585, "y" : 698 },
		/* 216 */ { "x" : 297, "y" : 734.04149391746 },
		/* 217 */ { "x" : 297, "y" : 722.0417049239776 },
		/* 218 */ { "x" : 297, "y" : 710 },
		/* 219 */ { "x" : 297, "y" : 698 },
		
		/* 220 */ { "x" : 1149.968665547433, "y" : -618.9686646206542, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 221 */ { "x" : 1150.0694602019682, "y" : -600.4728455134504, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 222 */ { "x" : 1148.069489899352, "y" : -600.4619464927276, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 223 */ { "x" : 1147.9686952448167, "y" : -618.9577655999315, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 224 */ { "x" : 1158, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 225 */ { "x" : 1168, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 226 */ { "x" : 1149, "y" : -623, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		/* 227 */ { "x" : 1158, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 228 */ { "x" : 1149, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 229 */ { "x" : 1168, "y" : -619.3999938964844, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		
		/* 230 */ { "x" : 1149.7396826762401, "y" : 597.9263578863065, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 231 */ { "x" : 1153.08526210564, "y" : 579.1424902194007, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 232 */ { "x" : 1155.0010783610655, "y" : 579.7166400913391, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 233 */ { "x" : 1151.7040246689874, "y" : 598.3023373212908, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 234 */ { "x" : 1161.6678517948505, "y" : 578.0712784773244, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 235 */ { "x" : 1171.2713154212654, "y" : 580.8593757453787, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 236 */ { "x" : 1153.0247345310775, "y" : 575.5619909360759, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		/* 237 */ { "x" : 1160.6641350766317, "y" : 581.528531244323, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 238 */ { "x" : 1152.0210178128586, "y" : 579.0192437030742, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 239 */ { "x" : 1170.2675987030466, "y" : 584.316628512377, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		
		/* 240 */ { "x" : -1152.8011166944932, "y" : 581.2713204942369, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 241 */ { "x" : -1150.0489225384003, "y" : 599.5615066971152, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 242 */ { "x" : -1152.026657561816, "y" : 599.8591040377528, "bCoef" : 0, "cMask" : ["wall" ] },
		/* 243 */ { "x" : -1154.7788517179088, "y" : 581.5689178348746, "bCoef" : 0, "cMask" : ["wall" ] },
		
		/* 244 */ { "x" : -1162.170956870286, "y" : 578.11573185304, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 245 */ { "x" : -1152.4133863896525, "y" : 575.9271664975008, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 246 */ { "x" : -1170.9527703028564, "y" : 580.085440673025, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" },
		/* 247 */ { "x" : -1161.383072006498, "y" : 581.6284631816164, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "DEFE2E" },
		
		/* 248 */ { "x" : -1170.1648854390683, "y" : 583.5981720016015, "bCoef" : 0, "cMask" : ["wall" ], "color" : "FA2E49" },
		
		/* 249 */ { "x" : -1151.6255015258641, "y" : 579.4398978260773, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "DEFE2E" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "kickOffBarrier" },
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		
		{ "v0" : 4, "v1" : 5, "color" : "b3d4a7", "trait" : "line", "y" : 250 },
		{ "v0" : 5, "v1" : 7, "color" : "b3d4a7", "trait" : "line", "x" : 840 },
		{ "v0" : 6, "v1" : 7, "color" : "b3d4a7", "trait" : "line", "y" : -250 },
		{ "v0" : 8, "v1" : 9, "color" : "b3d4a7", "trait" : "line", "y" : 195 },
		{ "v0" : 9, "v1" : 11, "color" : "b3d4a7", "trait" : "line", "x" : 1030 },
		{ "v0" : 10, "v1" : 11, "color" : "b3d4a7", "trait" : "line", "y" : -150 },
		{ "v0" : 12, "v1" : 13, "curve" : -110, "color" : "b3d4a7", "trait" : "line", "x" : 840 },
		{ "v0" : 14, "v1" : 15, "color" : "b3d4a7", "trait" : "line", "y" : -337 },
		{ "v0" : 15, "v1" : 17, "color" : "b3d4a7", "trait" : "line", "x" : -840 },
		{ "v0" : 16, "v1" : 17, "color" : "b3d4a7", "trait" : "line", "y" : 250 },
		{ "v0" : 18, "v1" : 19, "color" : "b3d4a7", "trait" : "line", "y" : -150 },
		{ "v0" : 19, "v1" : 21, "color" : "b3d4a7", "trait" : "line", "x" : -1030 },
		{ "v0" : 20, "v1" : 21, "color" : "b3d4a7", "trait" : "line", "y" : 150 },
		{ "v0" : 22, "v1" : 23, "curve" : -110, "color" : "b3d4a7", "trait" : "line", "x" : -840 },
		{ "v0" : 24, "v1" : 25, "curve" : -180, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -180, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 180, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 180, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 90, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 90, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : -90, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -90, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "color" : "a7cf9b", "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "color" : "a7cf9b", "trait" : "line", "x" : -935 },
		{ "v0" : 28, "v1" : 29, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 32, "v1" : 33, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 34, "v1" : 35, "curve" : 90, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -180, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "curve" : 180, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 36, "v1" : 37, "curve" : -90, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 38, "v1" : 39, "curve" : 90, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 40, "v1" : 41, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		{ "v0" : 42, "v1" : 43, "curve" : -40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : 1220 },
		{ "v0" : 44, "v1" : 45, "curve" : -40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -1220 },
		{ "v0" : 46, "v1" : 47, "curve" : 40, "vis" : true, "color" : "576C46", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : 1220 },
		{ "v0" : 48, "v1" : 49, "curve" : -60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 50, "v1" : 51, "curve" : 60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "curve" : -60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 54, "v1" : 55, "curve" : 60, "vis" : true, "color" : "576C46", "bCoef" : -2.45, "cMask" : ["ball" ], "trait" : "line" },
		
		{ "v0" : 45, "v1" : 56, "vis" : true, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 44, "v1" : 57, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 61, "v1" : 60, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 59, "v1" : 58, "vis" : true, "cMask" : ["ball" ] },
		{ "v0" : 67, "v1" : 69, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 66, "v1" : 68, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 62, "v1" : 65, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		{ "v0" : 63, "v1" : 64, "vis" : true, "color" : "000000", "cMask" : ["ball" ] },
		
		{ "v0" : 70, "v1" : 71, "curve" : 180, "vis" : true, "color" : "b3d4a7", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 70, "v1" : 71, "curve" : -180, "vis" : true, "color" : "b3d4a7", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 74, "v1" : 73, "vis" : true, "color" : "b3d4a7", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 78, "v1" : 79, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 80, "v1" : 81, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 82, "v1" : 83, "curve" : 90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 84, "v1" : 85, "curve" : -90, "vis" : true, "color" : "638750", "trait" : "line" },
		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "638750", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "638750", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "y" : 475 },
		{ "v0" : 90, "v1" : 91, "vis" : true, "color" : "b3d4a7", "trait" : "line" },
		{ "v0" : 91, "v1" : 92, "vis" : true, "color" : "b3d4a7", "trait" : "line", "y" : 600 },
		{ "v0" : 90, "v1" : 93, "vis" : true, "color" : "b3d4a7", "trait" : "line", "y" : -600 },
		{ "v0" : 92, "v1" : 93, "vis" : true, "color" : "b3d4a7", "trait" : "line" },
		
		{ "v0" : 94, "v1" : 95, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : -475 },
		{ "v0" : 95, "v1" : 96, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "x" : -1300 },
		{ "v0" : 96, "v1" : 97, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : 475 },
		
		{ "v0" : 98, "v1" : 99, "trait" : "kickOffBarrier", "y" : -475 },
		{ "v0" : 100, "v1" : 101, "trait" : "kickOffBarrier", "y" : 475 },
		
		{ "v0" : 102, "v1" : 103, "color" : "6666FF", "bCoef" : 1000000, "cMask" : ["blue" ] },
		{ "v0" : 104, "v1" : 105, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 106, "v1" : 107, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 108, "v1" : 109, "vis" : false, "bCoef" : 1000000, "cMask" : ["red" ], "x" : -1410 },
		{ "v0" : 110, "v1" : 111, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : -475 },
		{ "v0" : 111, "v1" : 112, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "x" : 1300 },
		{ "v0" : 112, "v1" : 113, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : 475 },
		
		{ "v0" : 114, "v1" : 115, "trait" : "kickOffBarrier", "y" : -475 },
		{ "v0" : 116, "v1" : 117, "trait" : "kickOffBarrier", "y" : 475 },
		
		{ "v0" : 118, "v1" : 119, "color" : "FF6666", "bCoef" : 1000000, "cMask" : ["red" ] },
		{ "v0" : 120, "v1" : 121, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 122, "v1" : 123, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 124, "v1" : 125, "vis" : false, "bCoef" : 1000000, "cMask" : ["blue" ], "x" : 1410 },
		{ "v0" : 126, "v1" : 130, "curve" : 0, "vis" : true, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "x" : 1150 },
		{ "v0" : 127, "v1" : 131, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 129, "v1" : 132, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 133, "v1" : 134, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 135, "v1" : 136, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 137, "v1" : 138, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 139, "v1" : 140, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 142, "v1" : 144, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -242 },
		
		{ "v0" : 141, "v1" : 142, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		{ "v0" : 143, "v1" : 144, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 145, "v1" : 149, "curve" : 0, "vis" : true, "color" : "b3d4a7", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1150 },
		{ "v0" : 146, "v1" : 150, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 148, "v1" : 151, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 152, "v1" : 153, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 161, "v1" : 163, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -242 },
		
		{ "v0" : 160, "v1" : 161, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		{ "v0" : 162, "v1" : 163, "curve" : 0, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 164, "v1" : 165, "color" : "ffffff", "x" : -286.93953763264415 },
		
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 168, "v1" : 169, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "_selected" : true },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "_selected" : true },
		{ "v0" : 171, "v1" : 171, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148, "_selected" : true },
		
		{ "v0" : 170, "v1" : 172, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "_selected" : true },
		
		{ "v0" : 173, "v1" : 174, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "_selected" : true },
		{ "v0" : 173, "v1" : 174, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "_selected" : true },
		{ "v0" : 174, "v1" : 174, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "_selected" : true },
		
		{ "v0" : 173, "v1" : 175, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "_selected" : true },
		
		{ "v0" : 176, "v1" : 177, "color" : "ffffff" },
		{ "v0" : 176, "v1" : 178, "color" : "ffffff", "x" : -70 },
		{ "v0" : 179, "v1" : 180, "color" : "ffffff", "y" : 667 },
		{ "v0" : 181, "v1" : 182, "color" : "ffffff", "y" : 667 },
		{ "v0" : 183, "v1" : 184, "color" : "ffffff", "y" : 667 },
		{ "v0" : 185, "v1" : 186, "color" : "ffffff", "y" : 667 },
		{ "v0" : 187, "v1" : 188, "color" : "ffffff" },
		{ "v0" : 187, "v1" : 189, "color" : "ffffff" },
		{ "v0" : 190, "v1" : 191, "color" : "ffffff", "x" : -286.93953763264415 },
		{ "v0" : 192, "v1" : 193, "color" : "ffffff", "x" : -286.93953763264415 },
		{ "v0" : 194, "v1" : 195, "color" : "ffffff", "x" : -70 },
		{ "v0" : 196, "v1" : 197, "color" : "ffffff", "x" : -70 },
		{ "v0" : 198, "v1" : 199, "color" : "ffffff" },
		{ "v0" : 198, "v1" : 200, "color" : "ffffff", "x" : -70 },
		{ "v0" : 201, "v1" : 202, "color" : "ffffff", "y" : 667 },
		{ "v0" : 203, "v1" : 204, "color" : "ffffff", "y" : 667 },
		{ "v0" : 205, "v1" : 206, "color" : "ffffff", "y" : 667 },
		{ "v0" : 207, "v1" : 208, "color" : "ffffff", "y" : 667 },
		{ "v0" : 209, "v1" : 210, "color" : "ffffff" },
		{ "v0" : 209, "v1" : 211, "color" : "ffffff" },
		{ "v0" : 214, "v1" : 215, "color" : "ffffff", "x" : -286.93953763264415 },
		{ "v0" : 216, "v1" : 217, "color" : "ffffff", "x" : -70 },
		{ "v0" : 218, "v1" : 219, "color" : "ffffff", "x" : -70 },
		
		{ "v0" : 220, "v1" : 221, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 222, "v1" : 223, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 224, "v1" : 225, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 224, "v1" : 225, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 225, "v1" : 225, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 224, "v1" : 226, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 227, "v1" : 228, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 227, "v1" : 228, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 228, "v1" : 228, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 227, "v1" : 229, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 230, "v1" : 231, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 232, "v1" : 233, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 234, "v1" : 235, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 234, "v1" : 235, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 235, "v1" : 235, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 234, "v1" : 236, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 237, "v1" : 238, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 237, "v1" : 238, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 238, "v1" : 238, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 237, "v1" : 239, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 240, "v1" : 241, "curve" : 0, "vis" : true, "color" : "D7D7D9", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "cornerflag" },
		
		{ "v0" : 242, "v1" : 243, "curve" : 0, "vis" : true, "color" : "708a5a", "bCoef" : 0, "cMask" : ["wall" ], "x" : 717 },
		{ "v0" : 244, "v1" : 245, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 244, "v1" : 245, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 245, "v1" : 245, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ], "x" : -1148 },
		
		{ "v0" : 244, "v1" : 246, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 247, "v1" : 248, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 247, "v1" : 248, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		{ "v0" : 248, "v1" : 248, "curve" : 0, "vis" : true, "color" : "FA2E49", "bCoef" : 0, "cMask" : ["wall" ] },
		
		{ "v0" : 247, "v1" : 249, "vis" : true, "color" : "DEFE2E", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" }

	],

	"goals" : [
		{ "p0" : [-1160,115 ], "p1" : [-1160,-116.89189189189187 ], "team" : "red" },
		{ "p0" : [1160,115.16891891891896 ], "p1" : [1160,-117.98923923923925 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [1150,-119 ], "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [1150,116 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [1260.5,144 ], "color" : "4a4e52" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1259.5,-148 ], "color" : "4a4e52" },
		
		{ "radius" : 5, "pos" : [-1150,116.08750755868094 ], "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [-1150,-118.91461989892463 ], "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1259.8669727834986,-147.38010906609267 ], "color" : "4a4e52" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1260.0977098047515,144.62151209452182 ], "color" : "4a4e52" },
		
		{ "radius" : 1.5, "pos" : [-1150.5542972394846,-600.1732586129118 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [1150.4457027605154,-600.1732586129118 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [1148.8518594069587,599.6163281131223 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 },
		{ "radius" : 1.5, "pos" : [-1149.6336058891993,599.8040409312609 ], "color" : "13181C", "trait" : "cornerflag", "curve" : 0 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -625, "bCoef" : 0, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -625, "bCoef" : 0, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -665, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1220, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -1220, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [1,0 ], "dist" : -1420, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1420, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`



var triggerDistance = radiusBall + 15 + 0.01;
var outLineY = stadiumWidth - (radiusBall / 2) + 6;
stadiumWidth += (radiusBall / 2) + 6;
stadiumHeight += (radiusBall / 2) + 6;

var Team = {
    SPECTATORS: 0,
    RED: 1,
    BLUE: 2
};
var lastScores = 0;
var lastTeamTouched = 0;
var lineBallPosition;
var exitingPos = null;
var previousBallPos;
var assistingTouch = "";
var botSus = false;
var lastPlayerTouched = "";
var backMSG = false;
var lastCall;
var oyuncular = []; // isim:,id:,galibiyet:,yenilgi:
var isBallUp = false;
var crossed = false;
var gol;
var redMax = 4;
var blueMax = 4;

var db = { p: { N: 10, kt: 1 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 1000) > db.p.kt) { room.kickPlayer(player.id, "spam", false); } } }

function MacOynanabilir()
{
	if (GetTeam(1).length == redMax && GetTeam(2).length == blueMax){room.startGame();clearTimeout(gol); gol = setTimeout(function(){MacBitti(2);}, 74414000);}
	else {room.stopGame();}
}
function TakimlariDengele(redMaksimumOyuncuSayisi, blueMaksimumOyuncuSayisi)
{
	var spec = GetTeam(0);
	var red = GetTeam(1);
	var blue = GetTeam(2);
	var red_ = red.length;
	var blue_ = blue.length;
	var spec_ = spec.length;
	var tempRed = red_;
	var tempBlue = blue_;
	for(var i = 0; i < spec_; i++) // Spec Varsa Dağıt
	{
		if(red_ < redMaksimumOyuncuSayisi && red_ <= blue_) // Öncelik Az Kişi Olan Takıma Oyuncu Göndermekte.
		{
			room.setPlayerTeam(spec[i].id,1);
			red_++;
		}
		else if(blue_ < blueMaksimumOyuncuSayisi && blue_ <= red_)
		{
			room.setPlayerTeam(spec[i].id,2);
			blue_++;
		}
		else if(red_ < redMaksimumOyuncuSayisi)
		{
			room.setPlayerTeam(spec[i].id,1);
			red_++;
		}
		else if(blue_ < blueMaksimumOyuncuSayisi)
		{
			room.setPlayerTeam(spec[i].id,2);
			blue_++;
		}
	}
	if(red_ > blue_ + 1 && blue_ < blueMaksimumOyuncuSayisi)
	{
		for (var i = 1; i < red_ - blue_; i++)
		{
			if(!(blue < blueMaksimumOyuncuSayisi)) return;
			room.setPlayerTeam(red[red_ - i].id,2);
			blue_++;
		}
	}
	else if (blue_ > red_ + 1 && red_ < redMaksimumOyuncuSayisi)
	{
		for (var i = 1; i < blue_ - red_; i++)
		{
			if(!(red < redMaksimumOyuncuSayisi)) return;
			room.setPlayerTeam(blue[blue_ - i].id,1);
			red_++;
		}
	}
	if(red_ != tempRed || blue_ != tempBlue){setTimeout(function(){MacOynanabilir();},100);}
}

var isBallKickedOutside = false;
var previousPlayerTouched;


if(officialRSHLHost)
{
    room.setScoreLimit(0);
    room.setTimeLimit(0);
}else
{
	var lineCrossedPlayers = [{name: "temp", times: 0}];
    room.setCustomStadium(rs);
room.setTimeLimit(5);
room.setScoreLimit(3);
room.setTeamsLock(true);
room.onStadiumChange = function(newStadiumName, byPlayer) {
if (newStadiumName != "\ud835\udde5\ud835\uddd8\ud835\uddd4\ud835\udddf \ud835\udde6\ud835\udde2\ud835\uddd6\ud835\uddd6\ud835\uddd8\ud835\udde5 \ud835\ude23\ud835\ude3a \u0040\ud835\udda6\ud835\uddcb\ud835\uddba\ud835\uddc7\ud835\uddbd\ud835\uddbe\ud835\uddcc\ud835\uddab\ud835\uddc2\ud835\uddc0\ud835\uddba\ud835\uddcc\ud835\udda0\ud835\uddb1\ud835\udda6") {
room.setCustomStadium(rs);
}
}
}
room.onTeamGoal = function(team) {
    var players = room.getPlayerList();
    if(!officialRSHLHost)
    {
        for(var i = 0; i < players.length; i++) {
            if(players[i].name==lastPlayerTouched)
            {
                if(players[i].team==team)
                {
                    if(players[i].name!=assistingTouch && assistingTouch!="")
                    {
                        room.sendChat("Goooooooooooooool ✅ - ⚽ Gol de " + players[i].name + " y 👟  asistencia de " + assistingTouch + " 🔥");
                        assistingTouch = "";
                        lastPlayerTouched = "";

                    }else
                    {
                        room.sendChat("Goooooooooooooool ✅ - ⚽ Gol de " + players[i].name + " 🔥");
                        assistingTouch = "";
                        lastPlayerTouched = "";
                    }

                }else room.sendChat("Goooooooooooooool - en contra! 😱");
            }
        }
    }
}
room.onGameStart = function(player) {
    lineCrossedPlayers = [{name: "temp", times: 0}];
    lastScores = room.getScores().red + room.getScores().blue;
}

room.onPlayerBallKick = function(player) {
    var ballPosition = room.getBallPosition();
    if(player.name!=lastPlayerTouched)
    {
        if(lastTeamTouched==player.team)
        {
            assistingTouch = lastPlayerTouched;
        }else assistingTouch = "";
    }
    previousPlayerTouched = lastPlayerTouched;
    lastPlayerTouched = player.name;
    lastTeamTouched = player.team;

    if(isBallOutsideStadium && ballPosition.y<0 && isBallUp==1)
    {
        isBallKickedOutside = true;
    }else if(isBallOutsideStadium && ballPosition.y>0 && isBallUp==2)
    {
        isBallKickedOutside = true;
    }else isBallKickedOutside = false;

}
room.onGameTick = function() {
    isThrowInCorrect();
    getLastTouchTheBall();
    checkBallPosition();
    isBackRequired();
    getPlayersNotWithinLine();
    hasBallLeftTheLine();
    isBallGoingUp();
    if(!officialRSHLHost)
    {
        checkLineCrosses();
    }
}

function checkLineCrosses()
{
    var players = room.getPlayerList();
    for(var i = 0; i < lineCrossedPlayers.length; i++)
    {
        if(lineCrossedPlayers[i].times>=100)
        {
        	players = room.getPlayerList();
            for(var j = 0; j<players.length; j++)
            {
				players = room.getPlayerList();
                if(lineCrossedPlayers[i].name==players[j].name)
                {
                    lineCrossedPlayers[i].times=0;
                    room.kickPlayer(players[j].id, " ➡️ 🔶 Amonestado", false);
                    lineCrossedPlayers.splice(i,i);
                }
            }
        }
    }
}


function isOutsideStadium(ballPosition) {
    return ballPosition.x > stadiumWidth || ballPosition.x < -stadiumWidth || ballPosition.y > stadiumHeight || ballPosition.y < -stadiumHeight;
}

var isBallOutsideStadium = false;

function Mesaj(msg, botsusGecersiz=true){if(!botsusGecersiz && botSus){return;}room.sendChat(msg);};
function SusBot(){if(!botSus){Mesaj("Bot Artık Fazla Konuşmayacak.",true);}else{Mesaj("Bot Artık Konuşacak!",true)}botSus=!botSus;}

function checkBallPosition() {
    var ballPosition = room.getBallPosition();
    if(isOutsideStadium(ballPosition)) {
        if(!isBallOutsideStadium) {
            isBallOutsideStadium = true;
            exitingPos = ballPosition.x;
            var totalScores = room.getScores().red + room.getScores().blue;
            if(lastScores != totalScores) {
                lastScores = totalScores;
                return false;
            }
            if(ballPosition.x > stadiumWidth && lastTeamTouched == Team.RED || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.BLUE) {
                lastCall = "[⚽] Saque de Arco";
                room.sendChat("[⚽] Saque de Arco");
            }
            else if(ballPosition.x > stadiumWidth && lastTeamTouched == Team.BLUE || ballPosition.x < -stadiumWidth && lastTeamTouched == Team.RED) {
                room.sendChat("[🚩] Corner");
                lastCall = "[🚩] Corner";
            }
            else {
                isBallKickedOutside = false;
                room.sendChat(lastTeamTouched == Team.RED ? "[B] El lateral es del Blue 🔵" : "[R] El lateral es del Red 🔴");
                lastCall = lastTeamTouched == Team.RED ? "2" : "1";
            }

        }
    }
    else {
        isBallOutsideStadium = false;
        backMSG = true;

    }
    return true;
}

function getLastTouchTheBall() {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if(players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if(distanceToBall < triggerDistance) {
                if(lastPlayerTouched!=players[i].name)
                {
                    if(lastTeamTouched==players[i].team)
                    {
                        assistingTouch = lastPlayerTouched;
                    }else assistingTouch = "";
                }
                lastTeamTouched = players[i].team;
                previousPlayerTouched == lastPlayerTouched;
                lastPlayerTouched = players[i].name;
            }
        }
    }
    return lastPlayerTouched;
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function getPlayersNotWithinLine()
{
    var players = room.getPlayerList();
    var found = false;
    if(crossed)
    {
        for(var i = 0; i < players.length; i++) {
            if(players[i].position != null) {
                if(players[i].team != lastTeamTouched && players[i].team!= lastCall)
                {
                    if((players[i].position.y > greenLine || players[i].position.y < -greenLine) && pointDistance(room.getBallPosition(), players[i].position)<500) 
                    {
                        for(var j = 0; j < lineCrossedPlayers.length; j++)
                        {
                            if(lineCrossedPlayers[j].name==players[i].name)
                            {
                                lineCrossedPlayers[j].times = lineCrossedPlayers[j].times + 1;
                                room.sendChat(" ➡️ 🔶 Amonestado: " + players[i].name + " (" + lineCrossedPlayers[j].times + ")  | Por no dejar distancia");
                                found = true;
                            }

                        }
                        if(!found)
                        {
                            lineCrossedPlayers.push({name: players[i].name, times: 1});
                            room.sendChat(" ⏱➡️ 🔶 Amonestado: " + players[i].name + " (1) | Por no dejar distancia");
                        }
                    }
                }

            }
        }
    }
    crossed = false;
}

function isBackRequired()
{
    var ballPosition = room.getBallPosition();
    if(lastCall=="1")
    {
        if((ballPosition.x - exitingPos > throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition))
        {
            backMSG = false;
            room.sendChat("⚠ NO SACAR DESDE CUALQUIER LUGAR ⚠");

        }
        if((ballPosition.x - exitingPos < -throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition))
        {
            backMSG = false;


            room.sendChat("⚠ NO SACAR DESDE CUALQUIER LUGAR ⚠");


        }
    }
    if(lastCall=="2")
    {
        if((ballPosition.x - exitingPos > throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition))
        {
            backMSG = false;
            room.sendChat("⚠ NO SACAR DESDE CUALQUIER LUGAR ⚠");


        }
        if((ballPosition.x - exitingPos < -throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition))
        {
            backMSG = false;
            room.sendChat("⚠ NO SACAR DESDE CUALQUIER LUGAR ⚠");

        }
    }


}
function isThrowInCorrect()
{
    var ballPosition = room.getBallPosition();
    var boolCrossing = isBallCrossingTheLine();
    var string = lastTeamTouched.toString();
    if(boolCrossing && !isBallKickedOutside && string==lastCall && (lastCall=="1" || lastCall=="2"))
    {

        if(lastCall=="2")
        {
            room.sendChat("🚨 No arrastre la pelota, saque bien")
        }
        if(lastCall=="1")
        {
            room.sendChat("🚨 No arrastre la pelota, saque bien");
        }

        isBallKickedOutside == false;
    }else if(boolCrossing && string!=lastCall && (lastCall=="1" || lastCall=="2"))
    {
        //room.sendChat("WRONG TEAM");
    }

}
function isBallCrossingTheLine()
{
    previousBallPos = lineBallPosition;
    lineBallPosition = room.getBallPosition().y;
    crossed = (lineBallPosition<stadiumHeight && previousBallPos>stadiumHeight) || (lineBallPosition>-stadiumHeight && previousBallPos<-stadiumHeight);
    return (lineBallPosition<stadiumHeight && previousBallPos>stadiumHeight) || (lineBallPosition>-stadiumHeight && previousBallPos<-stadiumHeight);
}

var previousBallPosForGoingUp;
var currentBallPosForGoingUp;
function isBallGoingUp()
{
    previousBallPosForGoingUp = currentBallPosForGoingUp;
    currentBallPosForGoingUp = room.getBallPosition().y;
    if(previousBallPosForGoingUp - currentBallPosForGoingUp > 0.01)
    {
        isBallUp = 2;
    }else if(previousBallPosForGoingUp - currentBallPosForGoingUp < -0.01)
    {

        isBallUp = 1;
    }else
    {
        isBallUp = 0;
    } 
}

function hasBallLeftTheLine()
{
    var ballPosition = room.getBallPosition();
    if(ballPosition.y<outLineY && isBallKickedOutside)
    {

    }else if (ballPosition.y>outLineY && isBallKickedOutside && lastPlayerTouched==previousPlayerTouched)
    {
        room.sendChat("Bad");
    }

}
var db = { p: { N: 10, kt: 1 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 1000) > db.p.kt) { room.kickPlayer(player.id, "spam", false); } } }



function GetTeam(id){ return room.getPlayerList().filter((player) => player.id != 0 && player.team == id); }
function CreateOyuncu(player) { oyuncular[oyuncular.length] = {isim:player.name,id:player.id,galibiyet:0,yenilgi:0}; }
function DeleteOyuncu(id) { for(var i = 0; i < oyuncular.length; i++) {if(oyuncular[i].id == id) {oyuncular.splice(i, 1);}} }
function GetOyuncu(id) { for(var i = 0; i < oyuncular.length; i++) {if(oyuncular[i].id == id) {return oyuncular[i];}} }
function MacBitti(id)
{
	room.stopGame();
	clearTimeout(gol);
	var spec = GetTeam(0);
	var red = GetTeam(1);
	var blue = GetTeam(2);
	for(var i = 0; i < red.length; i++)
	{
		if(id == 1) { GetOyuncu(red[i].id).galibiyet++; }
		else { GetOyuncu(red[i].id).yenilgi++; }
	}

	for(var i = 0; i < blue.length; i++)
	{
		if(id == 2) { GetOyuncu(blue[i].id).galibiyet++; }
		else { GetOyuncu(blue[i].id).yenilgi++; }
	}

	if (id == 2) // If Blue Wins
	{
		room.sendChat("Felicitaciones! El equipo azul gano!");
		for(var i = 0; i < blue.length; i++) {AnnounceOyuncuStatus(blue[i].id);room.setPlayerTeam(blue[i].id, 1);}
		for(var i = 0; i < red.length; i++) {room.setPlayerTeam(red[i].id, 0);}
	}
	else
	{
		room.sendChat("Felicitaciones! El equipo rojo gano!");
		for(var i = 0; i < red.length; i++) {AnnounceOyuncuStatus(red[i].id);}
		for(var i = 0; i < blue.length; i++) {room.setPlayerTeam(blue[i].id, 0);}		
	}
	setTimeout(function(){spec = GetTeam(0); for(var i = 0; i < blueMax; i++){TakimlariDengele(redMax, blueMax);}}, 100);
}
function AnnounceTopOyuncu() {var enYuksekOyuncu = GetOyuncu(1); for(var i = 0; i < oyuncular.length; i++){if(enYuksekOyuncu == null){enYuksekOyuncu = oyuncular[i];}else if(oyuncular[i].galibiyet > enYuksekOyuncu.galibiyet){enYuksekOyuncu = oyuncular[i];}}if(enYuksekOyuncu == null){return;}room.sendChat("🥇: " + enYuksekOyuncu.isim + " - " + enYuksekOyuncu.galibiyet + " 🏆");}
function AnnounceOyuncuStatus(id) {var oyuncu=GetOyuncu(id); room.sendChat(oyuncu.isim+" - "+oyuncu.galibiyet+" 𝗩𝗜𝗖𝗧𝗢𝗥𝗜𝗔𝗦 , "+oyuncu.yenilgi+" 𝗗𝗘𝗥𝗥𝗢𝗧𝗔𝗦 "); }
room.onPlayerJoin = function(player) {
    if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
    console.log(player.name + " has joined.");Mesaj("Bienvenido al host " + player.name + " ",false);
    CreateOyuncu(player);
    var players = room.getPlayerList();
    var adminNumber = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].admin) {
            adminNumber++;
        }
    }
    if (adminNumber < 2) {
        room.setPlayerAdmin(players[1].id, true);
    }
};
room.onPlayerLeave = function(player) {db.log.splice(f(db.log, 'id', player.id), 1); console.log(player.name + " Has Left.");DeleteOyuncu(player.id);};
room.onPlayerChat = function(player, message) {spamFilter(player, message); console.log(player.name + ": " + message); if(message == "!myscore"){AnnounceOyuncuStatus(player.id);} else if(message == "!best"){AnnounceTopOyuncu();} };
room.onTeamVictory = function(scores) { if(scores.red>scores.blue){MacBitti(1);}else{MacBitti(2);} };

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}  


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
        room.setCustomStadium(real);
        break;
      default:
        room.setDefaultStadium("Big");	
	console.log(room.getConfig().map);
    }
  }
}


