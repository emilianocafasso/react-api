import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // stato array actors
  const [actors, setActors] = useState([]) // inizializzo array vuoto

  // chiamata API
  useEffect(() => {
    fetch("https://lanciweb.github.io/demo/api/actors/")
      .then(Response => Response.json())
      .then(data => {

        setActors(data);
      })
  }, []) // eseguo solo al primo rendering 
  console.log(actors);


  return (
    <>

      <div className='container'>
        <h1 className='text-center my-3'>My favourite Actors</h1>

        <div className='row'>
          {actors.map((actor, index) => (
            <div key={index} className='actor-card mb-3 mx-2'>

              <div className='row pt-3'>
                <div className="col-4">
                  <img
                    src={actor.image}
                    alt={actor.name}
                  />
                </div>
                <div className="col-8">
                  <p className='title'>{actor.name}</p>
                  <p className='info'>Birth Year: {actor.birth_year}</p>
                  <p className='info'>Nationality: {actor.nationality}</p>
                  <p className='bio'>Biography: {actor.biography}</p>
                  <div className='info fst-italic'>Awards: {actor.awards}</div>
                </div>
              </div>



            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

/* MILESTONE 1
Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API e stampiamoli in console.

MILESTONE 2
Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:
nome 
anno nascita
nazionalità
biografia
immagine
riconoscimenti

MILESTONE 3
Mostriamo in pagina una card per ciascun attore, con grafica a piacimento! */