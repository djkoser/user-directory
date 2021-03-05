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
    let favoriteMovies = cardList[cardIndex].favoriteMovies.map(el=> (
      <li>{el}</li>
    ))
    return (
      <div class='card'>
        <aside id='counter'>{cardIndex+1}/{cardList.length}</aside>
        <h1>{cardList[cardIndex].name}</h1>
        <br/>
        <h2><strong>From: </strong>{cardList[cardIndex].from}</h2>
        <h2><strong>Job Title: </strong>{cardList[cardIndex].jobTitle}</h2>
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