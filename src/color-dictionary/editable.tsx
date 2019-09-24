import React, { useState, useEffect } from 'react'
import EditIcon from '@material-ui/icons/EditOutlined'

import './editable.scss'

export type Props = {
  value: string
  onChange: (newValue: string) => void
}

export const Editable = ({ value, onChange }: Props) => {
  let domElm: HTMLElement | null

  const [editing, setEditing] = useState(false)
  const [backup, setBackup] = useState('')

  useEffect(() => domElm && domElm.focus(), [editing])

  const cancel = () => {
    setEditing(false)
    domElm.textContent = backup
    setBackup('')
  }
  const edit = () => {
    setEditing(true)
    setBackup(domElm.textContent)
  }
  const save = () => {
    setEditing(false)
    onChange(domElm.textContent)
    setBackup('')
  }
  const handleKeyDown = (e: any) => {
    const { key } = e
    switch (key) {
      case 'Enter':
        save()
        break
      case 'Escape':
        cancel()
        break
    }
  }

  const toggleEditing = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (editing) {
      cancel()
    } else {
      edit()
    }
  }

  return (
    <div className="editable">
      <span
        ref={domNode => {
          domElm = domNode
        }}
        onBlur={save}
        onKeyDown={handleKeyDown}
        contentEditable={editing}
        suppressContentEditableWarning={true}
      >
        {value}
      </span>
      <EditIcon onClick={toggleEditing} className="edit-icon" />
    </div>
  )
}
