import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { useState , useContext } from 'react';
import { ExpenseTrackerContext } from '../../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories} from '../../../constants/categories'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date()
}
const Form = () => {
  const classes = useStyles();
  const [formdate, setFormDate] = useState(initialState)
  const { addTransaction } = useContext(ExpenseTrackerContext)

  const createTransaction = () => {
    const transaction = {
      ...formdate,
      amount: Number(formdate.amount),
      id: uuidv4()
    }
    addTransaction(transaction)
    setFormDate(initialState)
  }
  const selectedCategories = formdate.type === 'Income' ? incomeCategories : expenseCategories 
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
                  <MenuItem value="business">Income</MenuItem>
                <MenuItem value="salary">Expense</MenuItem>
            
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
                 {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
        <Grid item xs={12}>
            <TextField type="number" label="amount" fullWidth value={formdate.amount} onChange={(e) => {
              setFormDate({
                ...formdate,
                amount: e.target.value
              })
          }} />
            <TextField type="date" label="Date" fullWidth value={formdate.date} onChange={(e) => {
              setFormDate({
                ...formdate,
                date: e.target.value
              })
            }}  />
          <Button fullWidth color="primary" className={classes.button} variant="outlined" onClick={createTransaction}>Create</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Form
