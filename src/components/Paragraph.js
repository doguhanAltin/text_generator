import React from 'react'
import {useSelector} from 'react-redux'
function Paragraph() {
    const parap = useSelector((state)=>state.paragraph.items)

  return (
    <div >   ${parap}</div>
  )
}

export default Paragraph