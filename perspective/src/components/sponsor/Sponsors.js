import React from "react";

//mui imports
import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";

//imports sponsor logos
import sponsor1 from "./assets/sponsor1.png";
import sponsor2 from "./assets/sponsor2.png";
import sponsor3 from "./assets/sponsor3.png";

const useStyles = makeStyles({
  root: {
    background: "#e7f1fd",
    color: "#106eea",
    textTransform: "uppercase",
    borderRadius: "50px",
    fontSize: "13px",
    letterSpacing: "1px",
    fontWeight: "700",
    margin: "auto",
    cursor: "context-menu",
  },
});

function SectionHeading(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Button className={classes.root}>{props.heading}</Button>
    </Grid>
  );
}
function Sponsor() {
  const sponsors = [{ url: sponsor1 }, { url: sponsor2 }, { url: sponsor3 }];

  return (
    <div>
      <SectionHeading heading="Sponsored By" />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        mt={4}
        mb={4}
      >
        {sponsors.map((sponsor) => {
          return (
            <img
              src={sponsor.url}
              alt="sponsor-logo"
              width="auto"
              height="85px"
              key={sponsor.url}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default Sponsor;
