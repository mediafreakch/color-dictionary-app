import React from 'react'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'

import { ColorDictionaryState, RemoveColorAction } from '../state'
import { Editable } from './editable'

type Props = {
  colorDictionary: ColorDictionaryState,
  removeColor: RemoveColorAction,
  updateColor: Function
}

export const ColorDictionaryList = ({ colorDictionary, removeColor, updateColor }: Props) => {
  const fromColors = Object.keys(colorDictionary)

  return (
    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {fromColors.map(color => (
          <tr key={color}>
            <td>{color}</td>
            <td>
              <Editable
                value={colorDictionary[color]}
                onChange={newColor => updateColor({ from: color, to: newColor })}
              />
            </td>
            <td>
              <DeleteIcon onClick={() => removeColor(color)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
