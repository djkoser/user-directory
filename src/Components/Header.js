import React from 'react'; 

export default function Header (props) {
  return (
    <header>
      <span className='headerLink' onClick={props.homeFn}>Home</span>
      <br/>
      {"(Click to Return to First Card)"}
    </header>
  )
} 