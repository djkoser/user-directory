import React, {Component} from 'react'; 
import EditDeleteNew from './EditDeleteNew';


// cardList={this.state.cardList} 
// addCard={this.addCard} 
// deleteCard={this.deleteCard}
// currentCard={this.state.currentCard}
// editToggle={this.state.editToggle}
// newToggle={this.state.newToggle}
export default class Card extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      idInput:0,
      lastNameInput:'',
      firstNameInput:'',
      cityInput:'',
      countryInput:'',
      employerInput:'',
      titleInput:'',
      favoriteMoviesInput:"", 
      newToggle: false,
      editToggle: false,
      };

      this.toggleNew=this.toggleNewEdit.bind(this,true);
      this.toggleEdit=this.toggleNewEdit.bind(this,false);

  };
  
    handleChange (key, value) {
      this.setState({
        [key]:value
      })
    }

    setStateForEdit = () => {
      let i = this.props.currentCard
      let list = [...this.props.cardList]
      this.setState({
        idInput: list[i].id,
        lastNameInput: list[i].name.last,
        firstNameInput: list[i].name.first,
        cityInput: list[i].city,
        countryInput: list[i].country,
        employerInput: list[i].employer,
        titleInput: list[i].title,
        favoriteMoviesInput: list[i].favoriteMovies.join(','), 
      })
    }

    setStateForNew = () => {
      this.setState({
        idInput:"",
        lastNameInput:"",
        firstNameInput:"",
        cityInput:"",
        countryInput:"",
        employerInput:"",
        titleInput:"",
        favoriteMoviesInput:""
      })
    }

    toggleNewEdit = (boolean) => {
      if (boolean) {
        if (!this.state.newToggle) {
          this.setStateForNew()
        }
        this.setState({
          newToggle: !this.state.newToggle
        })
      } else if (!boolean) {
        if (!this.state.editToggle) {
          this.setStateForEdit()
        }
        this.setState({
          editToggle: !this.state.editToggle,
        })
      }
    }

  render () {
    let cardIndex = this.props.currentCard;
    let cardList = this.props.cardList;
    const favoriteMovies = cardList[cardIndex].favoriteMovies.map((el, index) => (<li key={index}>{el}</li>));
    let cardContent;
    let aside;
    if (this.state.editToggle || this.state.newToggle) {
      // Edit and New view
      cardContent = (
      <div className='card'>
        <h1>
          <input type='text' placeholder='First name' onChange={e=> (this.handleChange('firstNameInput',e.target.value))} value={this.state.firstNameInput}></input>
          <input type='text' placeholder='Last Name' onChange={e=> (this.handleChange('lastNameInput',e.target.value))} value={this.state.lastNameInput}></input>
        </h1>
        <br/>
        <h2><strong>From: </strong>
        <input type='text' placeholder='City' onChange={e=> (this.handleChange('cityInput',e.target.value))} value={this.state.cityInput}></input>
        <input type='text' placeholder='Country' onChange={e=> (this.handleChange('countryInput',e.target.value))} value={this.state.countryInput}></input>
        </h2>
        <h2><strong>Job Title: </strong>
        <input type='text' placeholder='Job Title' onChange={e=> (this.handleChange('titleInput',e.target.value))} value={this.state.titleInput}></input>
        </h2>
        <h2><strong>Employer: </strong>
        <input type='text' placeholder='Employer' onChange={e=> (this.handleChange('employerInput',e.target.value))} value={this.state.employerInput}></input>
        </h2>
        <br/>
        <br/>
        <h3>Favorite Movies</h3>
        <textarea wrap='hard' className='movieInput' placeholder='Enter favorite movies separated by a comma' onChange={e=> (this.handleChange('favoriteMoviesInput',e.target.value))} value={this.state.favoriteMoviesInput}>
        </textarea>
      </div>
      );
    }  else if (!this.props.newToggle && !this.props.editToggle) {
      // Display only
        cardContent = (
        <div className='card'>
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
      );
    }; 
    if (this.state.newToggle) {
      aside=<aside id='counter'>{cardList.length+1}/{cardList.length}</aside>
    } else {
      aside = <aside id='counter'>{this.props.currentCard+1}/{cardList.length}</aside>}
    return (
      <div className='cardBox'>
        {aside}
        {cardContent}
        <EditDeleteNew 
          toggleNew={this.toggleNew} 
          toggleEdit={this.toggleEdit}
          deleteCard={this.props.deleteCard}/>
      </div>
    ); 
  };
}; 