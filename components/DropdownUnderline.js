import { useState } from 'react'

function DropdownUnderline({ value, items, setValue }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="dropdown-underline" onClick={() => setOpen(!open)}>
        <span>{value}</span>
        <img src="/svg/down.svg" alt="Dropdown" className={open ? 'open' : ''} />
      </div>
      <div className={`dropdown-underline-items ${open ? 'opened' : ''}`}>
        {items.map(item => (
          <div
            key={item}
            className="item"
            onClick={() => {
              setValue(item)
              setOpen(false)
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  )
}

export default DropdownUnderline
