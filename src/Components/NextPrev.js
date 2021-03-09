import React from 'react'; 

export default function NextPrev (props) {
  let invisibleNx;
  let invisiblePrv;
  if (props.editTogVal||props.newTogVal) {
    invisibleNx=true;
    invisiblePrv=true;
  } else if (props.curCard===0) {
    invisiblePrv=true;
  } else if (props.curCard>=props.cardList.length-1) {
    invisibleNx=true; 
  }
  return (
    <div className='nexPrevBox'>
      <span className={invisiblePrv?'invisible':'nxPrvButton'} onClick={props.decCard}>{'< Previous'}</span>
      <span className={invisibleNx?'invisible':'nxPrvButton'} onClick={props.incCard}>{'Next >'}</span>
    </div>
  )
}