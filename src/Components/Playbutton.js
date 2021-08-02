import React from 'react'
import "../styles/playbutton.scss"
// import Title from './Title'

const Playbutton = ({Snowflakes}) => {
  const handlePlay = () => {
    console.log("HI");
  }
  return (
    <>
      <button className="playbtn" onClick={handlePlay}>Play</button>
    </>
  )
}

export default Playbutton
