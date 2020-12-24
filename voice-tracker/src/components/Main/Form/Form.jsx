import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom align="center" variant="subtitle2">
            .....
          </Typography>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select>
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="salary">Salary</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        <Grid item xs={12}>
          <TextField type="number" label="amount" fullWidth />
          <TextField type="date" label="Date" fullWidth />
          <Button fullWidth color="primary" className={classes.button} variant="outlined">Create</Button>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default Form
