import React from 'react'; 

export default function NextPrev (props) {
  return (
    <div className='nexPrevBox'>
      <span className='nxPrvButton' onClick={props.decCard}>{'< Previous'}</span>
      <span className='nxPrvButton' onClick={props.incCard}>{'Next >'}</span>
    </div>
  )
}