import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Editor from './editor'
import ConnectedList from './manager'

export const ColorDictionaryContainer = () => (
  <Card>
    <CardContent>
        <ConnectedList />
        <Editor />
    </CardContent>
  </Card>
)
