import React from 'react'
import List from './List'

function Similar({data}) {
  return (
    <div className="similar">
        <List title={"Similar"} data={data}/>
    </div>
  )
}

export default Similar