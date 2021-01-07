import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import makeStyles from './styles';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';


export const Details = ({ title }) => {
    const clasess = makeStyles();
    const {total, chartData} = useTransactions(title)
  return ( 
    <Card className={title ==='Income'? clasess.income : clasess.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}&nbsp;</Typography>
        <Doughnut data={chartData} />
      </CardContent>
   </Card>
  )
}


