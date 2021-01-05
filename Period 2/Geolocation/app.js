const express = require('express')
const app = express()
const gju = require('geojson-utils');
const gameData = require('./gameData.js')

app.get('/geoapi/isuserinarea/:lon/:lat', function (req, res){
    const point = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}
    let inArea = gju.pointInPolygon(point,gameData.gameArea)
    if (inArea){
        res.send({status:inArea, msg:'Point was inside'})
    } else{
        res.send({status:inArea, msg:'Point was NOT inside'})
    }
    
})

app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', function (req, res){
    const players = gameData.players
    const center = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}
    let radius = req.params.rad
    let playersInside = []
    for (var i in players) {
        const player = {"type":"Point","coordinates": players[i].geometry.coordinates};
        if (gju.geometryWithinRadius(player, center, radius)) {
            playersInside.push(players[i])
        }
      }
      res.send(playersInside)
})

app.get('/geoapi/distanceToUser/:lon/:lat/:username', function (req, res){
    let username = req.params.username
    const players = gameData.players
    let player = {}
    for (var i in players) {
        if (players[i].properties.name === username){
            player = players[i]
            break
        }
    }
    
    if (Object.entries(player).length === 0){
        res.send(404, {msg:'Player not found'})
    }

    const point = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}
    const dist = gju.pointDistance(point,player.geometry)
    res.send({distance: dist, to: player.properties.name})
})


app.get('/', (req, res) => res.send('Geo Demo!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))