
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RickButton from "./RickButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Status } from "./types";

const statuses: Status[] = [
  { statusName: "Alive", icon: <FavoriteIcon /> },
  { statusName: "Dead", icon: <HeartBrokenIcon /> },
  { statusName: "unknown", icon: <QuestionMarkIcon /> },
];
interface StatusBarProps {
  setStatus: (status: string) => void;
}

function StatusBar({ setStatus }: StatusBarProps) {
  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "rgba(52, 52, 52, 0.5)" }}
      >
        {" "}
        <Typography align={"center"} variant={"h4"} style={{ color: "white" }}>
          Wybierz status
        </Typography>
      </Grid>
      {statuses.map((status: Status) => {
        return (
          <Grid
            item
            container
            xs={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "rgba(52, 52, 52, 0.1)" }}
          >
            <RickButton status={status} setStatus={setStatus}></RickButton>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default StatusBar;