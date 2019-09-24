import React, { useState, useEffect } from 'react'
import EditIcon from '@material-ui/icons/EditOutlined'

import './editable.scss'

export type Props = {
  value: string
  onChange: (newValue: string) => void
}

const Editable = ({ value, onChange }: Props) => {
  let domElm: HTMLElement | null

  const [editing, setEditing] = useState(false)
  const [backup, setBackup] = useState<string | null>('')

  useEffect(() => {
    domElm && domElm.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing])

  const cancel = () => {
    setEditing(false)
    if (domElm) {
      domElm.textContent = backup
    }
    setBackup('')
  }
  const edit = () => {
    setEditing(true)
    if (domElm) {
      setBackup(domElm.textContent)
    }
  }
  const save = () => {
    setEditing(false)
    if (domElm && domElm.textContent !== null) {
      onChange(domElm.textContent)
    }
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

export default Editable
