import React from 'react'; 

export default function EditDeleteNew (props) {
  return (
    <div className='edDelNewBox'>
      <button onClick={props.deleteCard} className='edDelNewButton'>Delete</button>
      <button onClick={props.toggleNew} className='edDelNewButton'>New</button>
      <button onClick={props.toggleEdit} className='edDelNewButton'>Edit</button>
    </div>
  )
}