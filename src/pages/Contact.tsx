import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardContent from "@mui/material/CardContent";
interface IState {
  panel1Expanded: boolean;
  panel2Expanded: boolean;
}
export default function Contact() {
  const [state, setState] = useState<IState>({
    panel1Expanded: false,
    panel2Expanded: false,
  });
  const safeSetState = (stateUpdate: Partial<IState>) =>
    setState((state: IState) => ({ ...state, ...stateUpdate }));
  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(panel);
      if (panel === "panel1") {
        safeSetState({ panel1Expanded: !state.panel1Expanded });
      } else {
        safeSetState({ panel2Expanded: !state.panel2Expanded });
      }
    };

  return (
    <div>
      <Card sx={{ minWidth: 275, margin: "5vh" }}>
        <Typography
          sx={{ marginLeft: "10px", marginTop: "10px", fontWeight: "bold" }}
        >
          Anita Horoszko - Contact page
        </Typography>
        <CardContent>
          <Accordion
            expanded={state.panel1Expanded}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Contact information
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Anita Horoszko{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                email adress: anitahoroszko@gmail.com
              </Typography>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                phone number: 534 567 544
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={state.panel2Expanded}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Social media
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                LinkedIn, GitHub
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography display="inline" sx={{ width: "33%", flexShrink: 0 }}>
                <a href="https://www.linkedin.com/in/anita-horoszko-467366182/">
                  <LinkedInIcon fontSize="large" />
                </a>
              </Typography>
              <Typography display="inline" sx={{ width: "33%", flexShrink: 0 }}>
                <a href="https://github.com/anitavictoria">
                  <GitHubIcon fontSize="large" />
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
