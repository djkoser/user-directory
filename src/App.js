import React, {Component} from 'react'; 
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import NextPrev from './Components/NextPrev';
import data from './data';

export default class App extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      cardList: data,
      currentCard:0,
    };
    this.incCard=this.incDecCard.bind(this,true);
    this.decCard=this.incDecCard.bind(this,false);
  };
  

  incDecCard = (boolean) => {
    let current = this.state.currentCard
    if (current > 0 && !boolean) {
      current--; 
    } else if (current< this.state.cardList.length-1 && boolean) {
      current++; 
    } 
    this.setState({
      currentCard:current
    }); 
  };

  addCard = (obj) => {
    const updatedList = [...this.state.cardList, obj]; 
    this.setState({
      cardList:updatedList
    });
  };
  
  deleteCard = (id) => {
    id=Number.parseInt(id);
    const updatedList = [...this.state.cardList];
    updatedList.forEach((e,ind,arr) => {
      if (e===id) {
        arr.splice(ind,1);
      }
    })
    updatedList.forEach((e, ind) => e.id=ind+1);
    this.setState({
      cardList:updatedList
    })
  } 

  home = () => {
    console.log('fired')
    this.setState({
      currentCard: 0
    });
  };



  render(){
    return (
      <div className='cardBox'>
        <Header homeFn={this.home}/>
        <Card 
          cardList={this.state.cardList}  
          currentCard={this.state.currentCard}
          addCard={this.addCard}
          deleteCard={this.deleteCard}
          />
        <NextPrev
          incCard={this.incCard}
          decCard={this.decCard}/>
      </div>
    )
  };
};


