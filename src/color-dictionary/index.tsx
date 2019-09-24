import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import DictionaryList from './dictionary-list'
import Editor from './form'

import { RootState } from '../store'

export const DictionaryManager = () => {
  const dictionary = useSelector((state: RootState) => state.colorDictionary.dictionary)
  const hasEntries = Object.keys(dictionary).length

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" align="left">
          Dictionary
        </Typography>
        <Typography variant="overline">Create a new mapping:</Typography>
        <Editor />
        {hasEntries ? (
          <>
            <Typography variant="overline">Or edit an existing:</Typography>
            <DictionaryList />
          </>
        ) : null}
      </CardContent>
    </Card>
  )
}
