import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Status } from "./types";
interface StatusBarProps {
  status: Status;
  setStatus: (status: string) => void;
}
function RickButton({ status, setStatus }: StatusBarProps) {
  return (
    <IconButton
      key={status.statusName}
      onClick={() => {
        setStatus(status.statusName);
      }}
    >
      {status.icon}
      {status.statusName}
    </IconButton>
  );
}
export default RickButton;