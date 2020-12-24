import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

export const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Expense Tracker"
        subheader="Powered by Speechly"
      />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $100
        </Typography>
        <Typography style={{ lineHeight: '1.5em', marginTop: '20px' }} variant="subtitle">
          {/* unfo card*/}
          Try saying: Add income for $100 in Category Salary for Monday ...
        </Typography>
        <Divider />
         <Form />
        <CardContent classname={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
          
        </CardContent>
      </CardContent>
    </Card>
  )
}

export default Main
