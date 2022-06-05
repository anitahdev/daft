import React, { useEffect, useState } from "react";
import { ICharacter } from "./types";

import Character from "./Character";
import StatusBar from "./StatusBar";
import Grid from "@mui/material/Grid";

function Characters() {
  const [listOfCharactersState, setListofCharactersState] = useState<
    ICharacter[]
  >([]);
  const [status, setStatus] = useState<string>("");
  let baseUrl = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setListofCharactersState(data.results);
      });
  }, []);
    useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setListofCharactersState(data.results);
      });
  }, [status]);

  return (
    <div>
      <StatusBar setStatus={setStatus} />
      <Grid container spacing={2} mt={1}>
        {listOfCharactersState.map((c) => {
          return <Character character={c} />;
        })}
      </Grid>
    </div>
  );
}

export default Characters;
