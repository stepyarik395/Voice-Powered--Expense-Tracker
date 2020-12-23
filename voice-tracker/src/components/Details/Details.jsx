import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import makeStyles from './style';
import { Doughnut } from 'react-chartjs-2';


  export const Details = (props) => {
    const clasess = makeStyles();
    
  return ( 
    <Card className={clasess.income}>
      <CardHeader title={props.title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        <Doughnut date="DATA" />
      </CardContent>
   </Card>
  )
}


