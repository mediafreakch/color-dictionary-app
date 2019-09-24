import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { removeColor, updateColor } from './state'
import Editable from './editable'

import { RootState } from '../store'

const ColorDictionaryList = () => {
  const dispatch = useDispatch()
  const dictionary = useSelector((state: RootState) => state.colorDictionary.dictionary)
  const fromColors = Object.keys(dictionary)

  const update = (from: string, to: string) => {
    dispatch(updateColor({ from, to }))
  }

  const remove = (color: string) => {
    dispatch(removeColor({ color }))
  }

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
                value={dictionary[color]}
                onChange={newColor => update(color, newColor)}
              />
            </TableCell>
            <TableCell>
              <DeleteIcon onClick={() => remove(color)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ColorDictionaryList
