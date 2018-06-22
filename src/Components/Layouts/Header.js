import React from "react";
import {AppBar, Toolbar, Typography} from 'material-ui'


const Header = () => {
  return (
<AppBar position="static">
  <Toolbar>
  <Typography variant="title" color="inherit">
  Exercise Database
  </Typography>

  </Toolbar>
</AppBar>
  ); 
}

export default Header