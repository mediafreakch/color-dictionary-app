// Inspired from Vince Llauderes https://github.com/llauderesv/react-form-validation
import { useState, useEffect, useCallback, FormEvent } from 'react'

function isObject(anything: any): boolean {
  return anything !== null && typeof anything === 'object'
}

interface StateSchema {
  [key: string]: any
}

interface ValidationSchema {
  [key: string]: {
    required: boolean
    validator?: {
      func: (value: any) => boolean
      error: string
    }
  }
}

type UseFormHook = {
  handleChange: (e: FormEvent) => void
  handleSubmit: (e: FormEvent) => void
  state: StateSchema
  disable: boolean
  clear: () => void
}

function useForm<T extends StateSchema>(
  stateSchema: T = {} as T,
  validationSchema: ValidationSchema = {},
  callback: (state: T) => void
): UseFormHook {
  const [state, setState] = useState<T>(stateSchema)
  const [disable, setDisable] = useState(true)
  const [isDirty, setIsDirty] = useState(false)

  // Disable button in initial render.
  useEffect(() => {
    setDisable(true)
    // eslint-disable-next-line
  }, [])

  // For every changed in our state this will be fired
  // To be able to disable the button
  useEffect(() => {
    if (isDirty) {
      setDisable(validateState())
    }
    // eslint-disable-next-line
  }, [state, isDirty])

  // Used to disable submit button if there's an error in state
  // or the required field in state has no value.
  // Wrapped in useCallback to cached the function to avoid intensive memory leaked
  // in every re-render in component
  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some(key => {
      const isInputFieldRequired = validationSchema[key].required
      const stateValue = state[key].value // state value
      const stateError = state[key].error // state error

      return (isInputFieldRequired && !stateValue) || stateError
    })

    return hasErrorInState
  }, [state, validationSchema])

  // Event handler for handling changes in input.
  // eslint-disable-next-line
  const handleChange = useCallback(event => {
    setIsDirty(true)

    const name = event.target.id
    const value = event.target.value

    let error = ''
    if (validationSchema[name].required) {
      if (!value || !value.trim()) {
        error = 'This field is required'
      }
    }

    if (isObject(validationSchema[name].validator)) {
      // Test your defined validation function
      if (value && !validationSchema[name].validator!.func(value)) {
        error = validationSchema[name].validator!.error
      }
    }

    setState(prevState => ({
      ...prevState,
      [name]: { value, error },
    }))
    // eslint-disable-next-line
  }, [])

  // eslint-disable-next-line
  const handleSubmit = useCallback(event => {
    event.preventDefault()

    // Making sure that there's no error in the state
    // before calling the submit callback function
    if (!validateState()) {
      callback(state)
    }
    // eslint-disable-next-line
  }, [])

  const clear = useCallback(() => {
    setState(stateSchema)
    // eslint-disable-next-line
  }, [])

  return { handleChange, handleSubmit, state, disable, clear }
}

export default useForm
