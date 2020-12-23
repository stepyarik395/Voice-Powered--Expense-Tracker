import React from 'react';
import { Details } from './components/Details/Details';
import { Grid } from '@material-ui/core';
import { CenterFocusStrongTwoTone } from '@material-ui/icons';
const App = () => {
  return (
    <div>
      <Grid container spacing={0} alignItems="center">
        <Details />
      </Grid>
    </div>
  );
};

export default App;
