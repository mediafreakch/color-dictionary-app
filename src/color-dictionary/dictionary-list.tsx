import React from 'react'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { ColorDictionaryState, RemoveColorAction } from './state'
import { Editable } from './editable'

type Props = {
  colorDictionary: ColorDictionaryState
  removeColor: RemoveColorAction
  updateColor: Function
}

export const ColorDictionaryList = ({ colorDictionary, removeColor, updateColor }: Props) => {
  const fromColors = Object.keys(colorDictionary)

  return (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fromColors.map(color => (
            <TableRow key={color}>
              <TableCell>{color}</TableCell>
              <TableCell>
                <Editable
                  value={colorDictionary[color]}
                  onChange={newColor => updateColor({ from: color, to: newColor })}
                />
              </TableCell>
              <TableCell>
                <DeleteIcon onClick={() => removeColor(color)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}
