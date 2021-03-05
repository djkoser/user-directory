import React, {Component} from 'react'; 
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import NextPrev from './Components/NextPrev';
import EditDeleteNew from './Components/EditDeleteNew';
import data from './data.js';

export default class App extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      cardList: data,
      currentCard: 0
    };
    this.incCard=this.incDecCard.bind(this,true);
    this.decCard=this.incDecCard.bind(this,false);
  };
  addCard = (obj) => {
    const updatedList = [...this.state.cardList, obj]; 
    this.setState({
      cardList:updatedList
    });
  };
  home = () => {
    this.setState({
      currentCard: 0
    });
  };

  incDecCard (boolean) {
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

  render(){
    return (
      <div className='cardBox'>
        <Header toHome={this.home}/>
        <Card currCard={this.state.currentCard} cardList={this.state.cardList}/>
        <NextPrev incCard={this.incCard} decCard={this.decCard}/>
        <EditDeleteNew/>
      </div>
    )
  };
};


