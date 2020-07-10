import React from 'react'

const CharaterItem = ({data: {name}}) => {
  console.log(name);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default CharaterItem
