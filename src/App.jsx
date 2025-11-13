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
        <h1>Attori</h1>
        <div>
          {actors.map((actor, index) => (
            <div key={index} className='card mb-3'>
              <div className='card-text'>Name: {actor.name}</div>
              <div className="card-text">Birth Year: {actor.birth_year}</div>
              <div className="card-text">Nationality: {actor.nationality}</div>
              <div className="card-text">Biography: {actor.biography}</div>
              <img
                src={actor.image}
                alt={actor.name}
                style={{ maxWidth: '200px' }}
              />
              <div className='card-text'>Awards: {actor.awards}</div>

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