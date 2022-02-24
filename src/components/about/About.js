import React from "react";
import Heading from "../shared/Heading";

//mui imports
import { Typography, Grid } from "@mui/material";

function About() {
  return (
    <div>
      <Heading title="About" />
      <Grid
        item
        container
        justifyContent="space-evenly"
        alignItems="center"
        mt={2}
      >
        <Typography variant="h4" color="#106eea">
          About PEC
        </Typography>
        <Typography variant="body2" mt={2} ml={4} mr={4} align="justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum .
        </Typography>
        <Typography variant="h4" color="#106eea">
          About CONFERENCE
        </Typography>
        <Typography variant="body2" mt={2} ml={4} mr={4} align="justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum .
        </Typography>
        <Typography variant="button">Organized By:</Typography>
        <Grid item container justifyContent="space-evenly" alignItems="center">
          <Typography variant="caption">
            Computer Science and Engineering Department
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
