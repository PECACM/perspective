import React from "react";

//mui imports
import { Grid } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Important_details.css';

function Important_details() {
  return (
    <div className="cards">
      <div className="card">
        <div>
          <div>
            <h3 >
              Important Dates!
            </h3>
            <p variant="body2">
              New Year :: 1 January, 2022
            </p>
          </div>
        </div>
      </div>
      <div className="card" >
      <div>
        <div>
          <h3 >
            Payment Gateway
          </h3>
         
        </div>
      </div>
    </div>
  </div>
  );
}

export default Important_details;