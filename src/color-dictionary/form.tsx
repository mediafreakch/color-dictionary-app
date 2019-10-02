import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { RootState } from '../store'
import { addColor } from './state'
import useForm from '../hooks/useForm'

import './form.scss'

type FormState = {
  from: { value: string; error: string }
  to: { value: string; error: string }
}

const ColorForm = () => {
  const dictionary = useSelector((state: RootState) => state.colorDictionary.dictionary)
  const dispatch = useDispatch()
  const add = (from: string, to: string) => {
    dispatch(addColor({ from, to }))
  }

  const schema: FormState = {
    from: { value: '', error: '' },
    to: { value: '', error: '' },
  }

  const validationRules = {
    from: {
      required: true,
      validator: {
        func: (value: string) => !dictionary[value],
        error: 'Already exists. Edit the existing instead',
      },
    },
    to: {
      required: true,
    },
  }

  const onSubmit = (state: FormState) => {
    add(state.from.value, state.to.value)
    clear()
  }

  const { state, handleChange, handleSubmit, disable, clear } = useForm(
    schema,
    validationRules,
    onSubmit
  )

  return (
    <form noValidate autoComplete="off" className="form" onSubmit={handleSubmit}>
      <TextField
        id="from"
        label="From"
        variant="filled"
        onChange={handleChange}
        value={state.from.value}
        margin="dense"
        error={!!state.from.error}
        helperText={state.from.error ? state.from.error : 'For example: Midnight Black'}
      />
      <TextField
        id="to"
        label="To"
        variant="filled"
        onChange={handleChange}
        value={state.to.value}
        margin="dense"
        error={!!state.to.error}
        helperText={state.to.error ? state.to.error : 'For example: Green'}
      />
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={handleSubmit}
        disabled={disable}
        className="submit"
      >
        Add
      </Button>
    </form>
  )
}

export default ColorForm
