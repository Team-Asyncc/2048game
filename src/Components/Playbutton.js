import React from 'react'
import "../styles/playbutton.scss"
// import Title from './Title'

const Playbutton = () => {
  const handlePlay = () => {
    console.log("hi");
  }
  return (
    <>
      <button className="playbtn" onClick={handlePlay}>Play</button>
    </>
  )
}

export default Playbutton
