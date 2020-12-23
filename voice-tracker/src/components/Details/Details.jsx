import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';
import { Doughnut } from 'react-chartjs-2';


const Details = () => {
  const clasess = useStyles();
  return ( 
    <Card className={classes.income}>
      <CardHeader title="Income" />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        <Doughnut date="DATA" />
      </CardContent>
   </Card>
  )
}

export default Details
