import React, {useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../context/context';
import Form from './Form/Form';
import List from './List/List';
import Infocard from '../InfoCard'

export const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Expense Tracker"
        subheader="Powered by Speechly"
      />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance ${balance}
        </Typography>
        <Typography style={{ lineHeight: '1.5em', marginTop: '20px' }} variant="subtitle1">
         <Infocard />
        </Typography>
        <Divider className={classes.divider} />
         <Form />
        <CardContent className={classes.cardContent}>
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
