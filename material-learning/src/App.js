import React from 'react';
import Button from '@material-ui/core/Button'

import './App.css';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  buttonClassExample: {
    height: '4rem'
  },
  titleClassExample: {
    fontStyle: 'oblique'
  },
});

function App() {

  const classes = useStyles();

  return (
    <div>
      <h1>No typography...</h1>
      <Typography
        variant="h1"
        color="primary"
        className={classes.titleClassExample}
      >
        Hey, typography
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        className={classes.buttonClassExample}
      >
        Hello world
      </Button>
      
    </div>
  );
}

export default App;
