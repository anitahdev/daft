import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Contact() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
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
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <a href="https://www.linkedin.com/in/anita-horoszko-467366182/">
              Linked In
            </a>
          </Typography>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            <a href="https://github.com/anitavictoria">GitHub</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
