const gameArea = {
    "type": "Polygon",
    "coordinates": [
        [
        [
          12.544240951538086,
          55.77594546428934
        ],
        [
          12.549219131469727,
          55.77502825125135
        ],
        [
          12.568359375,
          55.77604201177451
        ],
        [
          12.578487396240234,
          55.7767661102896
        ],
        [
          12.573423385620117,
          55.79467119920912
        ],
        [
          12.57059097290039,
          55.795877445664104
        ],
        [
          12.544240951538086,
          55.77594546428934
        ]
        ]
    ]
}

const players = [
    {
        "type": "Feature",
        "properties": {
            "name": "Team1-inside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.706898033618927,
                55.102466460039665
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Team2-inside"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.708046019077301,
                55.10233295656619
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "Team3-outside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.707214534282684,
                55.10204293024229
            ]
        }
    },
    {
        "type": "Feature",
        "properties": { "name": "Team4-outside" },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14.708155989646912,
                55.10294983095463
            ]
        }
    }
]

module.exports = {gameArea, players}