export type ColorDictionary = {
  [key: string]: string
}

export type ColorDictionaryState = {
  dictionary: ColorDictionary
}

export type AddColorPayload = {
  from: string
  to: string
}

export type UpdateColorPayload = {
  from: string
  to: string
}

export type RemoveColorPayload = {
  color: string
}
