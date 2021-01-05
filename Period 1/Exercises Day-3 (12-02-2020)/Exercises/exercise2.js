const fetch = require("node-fetch");

const URL = 'https://swapi.co/api/people/';

const getPlanetforFirstSpeciesInFirstMovieForPerson = (id) => {
    fetch(URL + id)
        .then(res => res.json())
        .then(data => {
            console.log('Name:' + data.name)
            fetch(data.films[0])
                .then(res => res.json())
                .then(film => {
                    console.log('First film: ' + film.title)
                    fetch(film.species[0])
                        .then(res => res.json())
                        .then(species => {
                            console.log('First species: ' + species.name)
                            fetch(species.homeworld)
                                .then(res => res.json())
                                .then(home => {
                                    console.log('Homeworld for Specie: ' + home.name)
                                })
                        })
                })
        })
}

//getPlanetforFirstSpeciesInFirstMovieForPerson(1)

getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async (id) => {
    try{
        const data = await fetch("https://swapi.co/api/people/" + id).then(res =>
          res.json()
        )
        console.log("Name: ", data.name)
        const film = await fetch(data.films[0]).then(res => res.json())
        console.log("First film:", film.title)
        const species = await fetch(film.species[0]).then(res => res.json())
        console.log("First species:", species.name)
        const home = await fetch(species.homeworld).then(res => res.json())
        console.log("Homeworld for Specie:", home.name)
    }
    catch(err){
        console.log('Error: ' + err )
    }
}

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1)