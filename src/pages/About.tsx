import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      {" "}
      <Grid item xs={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt
        molestias excepturi voluptatem quis deserunt obcaecati alias sit quo
        deleniti, tempore cupiditate autem natus repellat! Autem modi natus quo
        ipsum? Provident similique, laboriosam commodi, magnam sequi animi
        voluptas quis rerum corporis, quae amet illum placeat tenetur magni
        ipsam soluta incidunt.
        <Button variant="text">Contact me</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="pic"
          className="picture"
        ></img>
      </Grid>
    </Grid>
  );
}
