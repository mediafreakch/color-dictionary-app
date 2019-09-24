import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { addColor } from './state'

import './form.scss'

const ColorForm = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const clear = () => {
    setFrom('')
    setTo('')
  }

  const dispatch = useDispatch()
  const add = (payload: { from: string; to: string }) => {
    dispatch(addColor({ from, to }))
  }

  return (
    <form noValidate autoComplete="off" className="form">
      <TextField
        id="fromColor"
        label="From"
        variant="filled"
        onChange={e => setFrom(e.target.value)}
        value={from}
        margin="dense"
      />
      <TextField
        id="toColor"
        label="To"
        variant="filled"
        onChange={e => setTo(e.target.value)}
        value={to}
        margin="dense"
      />
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => {
          add({ from, to })
          clear()
        }}
      >
        Add
      </Button>
    </form>
  )
}

export default ColorForm
