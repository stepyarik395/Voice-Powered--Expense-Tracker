import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import makeStyles from './style';
import { Doughnut } from 'react-chartjs-2';



  export const Details = ({ title }) => {
    const clasess = makeStyles();
    
  return ( 
    <Card className={title ==='Income'? clasess.income : clasess.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut date="DATA" /> */}
      </CardContent>
   </Card>
  )
}


