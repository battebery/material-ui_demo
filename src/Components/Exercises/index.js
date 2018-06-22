import React from "react";
import { Grid } from "material-ui"


const Exercises = (props) => {
  return (
    <Grid container >
      <Grid item sm>
        Left Pane
      </Grid>
      <Grid item sm>
        Right Pane
      </Grid>
    </Grid>
  );
}

export default Exercises