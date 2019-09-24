import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import ConnectedList from './connected-dictionary-list'
import Editor from './connected-form'

export const DictionaryManager = () => (
  <Card>
    <CardContent>
      <Typography variant="h6" align="left">
        Dictionary
      </Typography>
      <Typography variant="overline">Create a new mapping:</Typography>
      <Editor />
      <Typography variant="overline">Or edit an existing:</Typography>
      <ConnectedList />
    </CardContent>
  </Card>
)
