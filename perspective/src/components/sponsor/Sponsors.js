import React from "react";
import Heading from "../shared/Heading";

//mui imports
import { Grid } from "@mui/material";

//imports sponsor logos
import sponsor1 from "./assets/sponsor1.png";
import sponsor2 from "./assets/sponsor2.png";
import sponsor3 from "./assets/sponsor3.png";

function Sponsor() {
  const sponsors = [{ url: sponsor1 }, { url: sponsor2 }, { url: sponsor3 }];

  return (
    <div>
      <Heading title="Sponsored By" />
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
