import React from 'react'

//mui imports
import { Typography } from "@mui/material";
import { Box } from '@mui/system';
import { Button } from '@mui/material';

function Home() {
  return (
    <div>
      {/* Navbar (Logo, items, register/login) */}
      {/* Picture carousel (Tagline, org by) */}
      {/* Sponsered by */}
      {/* About */}
      {/* Conference committee */}
      {/* Call for papers */}
      {/* Important details */}
      {/* Contact us (Footer) */}
      <Box m={5}>
        <Box mb={5}>
          <Typography variant="h2">
            Home Component
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Primary Theme
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Theme
        </Button>
      </Box>
    </div>
  );
}

export default Home