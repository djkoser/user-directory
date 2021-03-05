import React from 'react'; 

export default function NextPrev (props) {
  return (
    <div class='nexPrevBox'>
      <span class='nxPrvButton' onClick={props.decCard}>{'< Previous'}</span>
      <span class='nxPrvButton' onClick={props.incCard}>{'Next >'}</span>
    </div>
  )
}