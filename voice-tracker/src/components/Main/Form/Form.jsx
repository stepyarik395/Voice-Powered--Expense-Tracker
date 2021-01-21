import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { useState , useContext, useEffect } from 'react';
import { ExpenseTrackerContext } from '../../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { useSpeechContext } from '@speechly/react-client';
import { incomeCategories, expenseCategories } from '../../../constants/categories'
import formatDate from '../../../utils/format.Date'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date())
}
const Form = () => {
  const classes = useStyles();
  const [formdate, setFormDate] = useState(initialState)
  const selectedCategories = formdate.type === 'Income' ? incomeCategories : expenseCategories; 
  const { addTransaction } = useContext(ExpenseTrackerContext)
  const { segment } = useSpeechContext();


  const createTransaction = () => {
    if (Number.isNaN(Number(formdate.amount)) || !formdate.date.includes('-')) return;
    const transaction = {
      ...formdate,
      amount: Number(formdate.amount),
      id: uuidv4()
    }
    addTransaction(transaction)
    setFormDate(initialState)
  }
  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormDate({...formatDate, type:'Expanse'})
      } else if (segment.intent.intent === 'add_income') {
        setFormDate({...formatDate, type:'Income'})
      } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
        return createTransaction()
      } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
        return setFormDate(initialState)
      }
      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
        switch (e.type) {
          case 'amount':
            setFormDate({ ...formdate, amount: e.value });
            break;
          case 'category':
            if (incomeCategories.map((iC) => iC.type).includes(category)) {
              setFormDate({ ...formdate, type: 'Income', category });
            } else if ((expenseCategories.map((iC) => iC.type).includes(category))) {
              setFormDate({ ...formdate, type: 'Expance', category });
            }
            break;
          case 'date':
            setFormDate({ ...formdate, date: e.value });
            break;
          default:
            break;
        }
      });
      if (segment.isFinal && formdate.amount && formdate.category && formdate.type && formdate.formatDate) {
        createTransaction();
      }
    }
  }, [segment])
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom align="center" variant="subtitle2">
            {segment && segment.words.map((w)=> w.value).join(" ")}
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
                <MenuItem value="Expanse">Expanse</MenuItem>
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
            <TextField type="date" fullWidth defaultValue={formdate.date} onChange={(e) => {
              setFormDate({
                ...formdate,
                date: formatDate(e.target.value)
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
