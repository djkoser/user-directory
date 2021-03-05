import React, {Component} from 'react'; 

export default class Card extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      name:'',
      from:'',
      jobTitle:'',
      employer:'',
      favoriteMovies:[]
    }
  }
  
  render () {
    let cardIndex = this.props.currCard;
    let cardList = this.props.cardList;
    let favoriteMovies = cardList[cardIndex].favoriteMovies.map((el,index)=> (
      <li key={index}>{el}</li>
    ))
    return (
      <div className='card'>
        <aside id='counter'>{cardIndex+1}/{cardList.length}</aside>
        <h1>{cardList[cardIndex].name.first} {cardList[cardIndex].name.last}</h1>
        <br/>
        <h2><strong>From: </strong>{cardList[cardIndex].city}, {cardList[cardIndex].country}</h2>
        <h2><strong>Job Title: </strong>{cardList[cardIndex].title}</h2>
        <h2><strong>Employer: </strong>{cardList[cardIndex].employer}</h2>
        <br/>
        <br/>
        <h3>Favorite Movies</h3>
        <ol>
          {favoriteMovies}
        </ol>

      </div>
    ) 
  }
}