import React from 'react'; 

export default function Header (props) {
  return (
    <header>
      <span class='headerLink' onClick={props.toHome}>Home</span>
    </header>
  )
} 