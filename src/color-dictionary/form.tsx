import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './form.scss'

export type Payload = {
  from: string
  to: string
}

export type Props = {
  addColorTransform(transform: Payload): void
}

export const ColorForm = ({ addColorTransform }: Props) => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const clear = () => {
    setFrom('')
    setTo('')
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
          addColorTransform({ from, to })
          clear()
        }}
      >
        Add
      </Button>
    </form>
  )
}
