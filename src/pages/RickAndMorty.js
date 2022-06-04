import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function RickAndMorty() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        // let characters = data.results;
        setCharacter(data.results);
        console.log(data.results);
      });
  }, []);

  console.log(characters.name);
  return (
    <>
      <div>
        {characters.map((character) => {
          console.log(character);
          return (
            <div>
              <p>{character.name}</p> <img src={character.image}></img>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RickAndMorty;
