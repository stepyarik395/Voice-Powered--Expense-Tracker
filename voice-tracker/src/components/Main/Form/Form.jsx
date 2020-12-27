import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { useState } from 'react';



const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date()
}
const Form = () => {
 
  const classes = useStyles();
  const [formdate, setFormDate] = useState(initialState)
  console.log(formdate);

 
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
              <Select value={formdate.type} onChange={(e) => {
                setFormDate({
                  ...formdate,
                  type: e.target.value
                })
              }}>
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select value={formdate.category} onChange={(e) => {
                 setFormDate({
                  ...formdate,
                  category: e.target.value
                })
              }} >
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
