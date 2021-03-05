import React, {Component} from 'react'; 
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import NextPrev from './Components/NextPrev';
import EditDeleteNew from './Components/EditDeleteNew'

export default class App extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      cardList:[{name:"Marion Santori", from:"Liverpool, United Kingdom", jobTitle:"Research Associate", employer:"Skinix", favoriteMovies:['Fathom','Strange Magic', 'Martian Child']}, {name:"Marion Santori2", from:"Liverpool, United Kingdom2", jobTitle:"Research Associate2", employer:"Skinix2", favoriteMovies:['Fathom2','Strange Magic2', 'Martian Child2']}, {name:"Marion Santori3", from:"Liverpool, United Kingdom3", jobTitle:"Research Associate3", employer:"Skinix3", favoriteMovies:['Fathom3','Strange Magic3', 'Martian Child3']}, {name:"Marion Santori4", from:"Liverpool, United Kingdom4", jobTitle:"Research Associate4", employer:"Skinix4", favoriteMovies:['Fathom4','Strange Magic4', 'Martian Child4']}, {name:"Marion Santori5", from:"Liverpool, United Kingdom5", jobTitle:"Research Associate5", employer:"Skinix5", favoriteMovies:['Fathom5','Strange Magic5', 'Martian Child5']}],
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


