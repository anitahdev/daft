import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";

interface IState {
  login: string;
  password: string;
}

function LogInPage() {
  const [state, setState] = useState<IState>({
    login: "",
    password: "",
  });
  const safeSetState = (stateUpdate: Partial<IState>) =>
    setState((state: IState) => ({ ...state, ...stateUpdate }));

  const setLoginAndPasswordToEmptyString = (): void => {
    safeSetState({ login: "", password: "" });
  };
  const isLoginDataValid = (login: string, password: string): boolean => {
    let loginDataValid = false;
    if (login.length < 4) {
      alert("za krotki login");
    } else if (login.length > 20) {
      alert("za dlugi login");
    } else if (password.length > 20) {
      alert("za dlugie haslo");
    } else if (password.length < 4) {
      alert("za krotki haslo");
    } else {
      loginDataValid = true;
    }
    return loginDataValid;
  };
  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <LockOpenIcon color="secondary" fontSize="large" />
        </Grid>
        <Grid item xs={12}>
          <Typography align={"center"} variant={"h4"}>
            Zaloguj sie
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="login"
            label="login"
            variant="outlined"
            onChange={(v) => safeSetState({ login: v.target.value })}
            value={state.login}
            // value={"test"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="hasło"
            label="hasło"
            onChange={(v) => safeSetState({ password: v.target.value })}
            variant="outlined"
            type="password"
            value={state.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => {
              if (isLoginDataValid(state.login, state.password)) {
                localStorage.setItem("loginData", JSON.stringify(state));
                alert("Zalogowano");
              }
              setLoginAndPasswordToEmptyString();
            }}
          >
            Zaloguj
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogInPage;
