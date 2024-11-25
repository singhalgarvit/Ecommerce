import React from 'react'

function input({type,name,onchange}) {
  return (
    <input
        type={type}
        name={name}
        className="border-2 border-black rounded-md w-full px-1"
        onChange={onchange}
        required
      />
  )
}

export default input
