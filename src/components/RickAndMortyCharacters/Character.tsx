import React from "react";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { ICharacter } from "./types";

interface CharacterProps {
  character: ICharacter;
}

function Character({ character }: CharacterProps) {
  return (
    <Grid
      item
      container
      lg={4}
      md={6}
      xs={12}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <img alt={`${character.name}`} src={character.image}></img>
          <p style={{ textAlign: "center" }}>{character.name}</p>
          <p
            style={{
              textAlign: "center",
              color:
                character.status === "Alive"
                  ? "green"
                  : character.status === "Dead"
                  ? "red"
                  : "purple",
            }}
          >
            {character.status}
          </p>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default Character;
