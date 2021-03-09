import React from 'react'; 

// editTogVal newTogVal
export default function EditDeleteNew (props) {
  let invisibleEd; 
  let invisibleDel;
  let invisibleNew;
 
  if (props.cardList.length===0){
    invisibleDel=true;
    invisibleEd=true;
  } else if (props.editTogVal) {
    invisibleDel=true;
    invisibleNew=true;
  } else if (props.newTogVal) {
    invisibleEd=true;
    invisibleDel=true; 
  }
  return (
    <div className='edDelNewBox'>
      <button onClick={()=> props.deleteCard(props.cardList[props.currentCard].id)} className={invisibleDel ?'invisible': 'edDelNewButton'}>Delete</button>
      <button onClick={props.toggleNew} className={invisibleNew ?'invisible': 'edDelNewButton' }>New</button>
      <button onClick={props.toggleEdit} className={invisibleEd ?'invisible': 'edDelNewButton' }>Edit</button>
    </div>
  )
}