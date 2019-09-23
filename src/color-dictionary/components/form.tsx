import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export type Payload = {
  from: string
  to: string
}

export type Props = {
  addColorTransform(transform: Payload): void
  isEdit?: boolean
  initialFrom?: string
  initialTo?: string
  editColor: Function,
}

export const ColorForm = ({ addColorTransform, isEdit, initialFrom = '', initialTo = '', editColor }: Props) => {
  const [from, setFrom] = useState(initialFrom)
  const [to, setTo] = useState(initialTo)

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="fromColor"
        label="From"
        variant="filled"
        onChange={e => setFrom(e.target.value)}
        value={from}
      />
      <TextField
        id="toColor"
        label="To"
        variant="filled"
        onChange={e => setTo(e.target.value)}
        value={to}
      />
      {isEdit ? (
        <Button size="small" color="primary" onClick={() => editColor({ from, to })}>Update</Button>
      ) : (
        <Button size="small" color="primary" onClick={() => addColorTransform({ from, to })}>
          Add
        </Button>
      )}
    </form>
  )
}
