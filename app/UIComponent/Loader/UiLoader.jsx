import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const variants = ["h1", "h3", "body1", "caption"];

function SkeletorLoader() {
  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          <Skeleton />
        </Typography>
      ))}
    </div>
  );
}

export default function UiLoader() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <SkeletorLoader loading />
        <SkeletorLoader loading />
      </Grid>
    </Grid>
  );
}
