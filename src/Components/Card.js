import React, {Component} from 'react'; 
import EditDeleteNew from './EditDeleteNew';
import NextPrev from './NextPrev';

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
    };
    
    // Checks if deleteing last card to avoid errors related to deleting the last card in the deck
    deleteCheck = (key) => {
      if (this.props.cardList.length===1) {
        this.setState({
          newToggle:true,
          editToggle:false
        })
      }
      this.props.deleteCard(key);
    }

    toggleNewEdit = (boolean) => {
      //New Togggle Logic
      if (boolean) {
        if (!this.state.newToggle) {
          this.setStateForNew()
        } else if (this.state.newToggle) {
          let {id, lastNameInput, firstNameInput, cityInput, countryInput, employerInput, titleInput, favoriteMoviesInput,newToggle,editToggle} = this.state;
          let moviesArray= favoriteMoviesInput.split(",");
          let newCard = {
            id:this.props.cardList.length+1,
            name:{first:firstNameInput, last:lastNameInput},
            city:cityInput,
            country:countryInput,
            employer: employerInput,
            title:titleInput,
            favoriteMovies: moviesArray
          }
          this.props.addCard(newCard)
        }
        this.setState({
          newToggle: !this.state.newToggle
        })
    // Edit toggle logic
      } else if (!boolean) {
        if (!this.state.editToggle) {
          this.setStateForEdit()
        } else if (this.state.editToggle) {
          let {id, lastNameInput, firstNameInput, cityInput, countryInput, employerInput, titleInput, favoriteMoviesInput,newToggle,editToggle} = this.state;
          let moviesArray= favoriteMoviesInput.split(",");
          let editedCard = {
            id:this.props.cardList[this.props.currentCard],
            name:{first:firstNameInput, last:lastNameInput},
            city:cityInput,
            country:countryInput,
            employer: employerInput,
            title:titleInput,
            favoriteMovies: moviesArray
          }
          let editedCardList = [...this.props.cardList];
          editedCardList[this.props.currentCard] = editedCard;
          this.props.applyEdit(editedCardList);
        }
        this.setState({
          editToggle: !this.state.editToggle
      })
    }
  }


  render () {
    let {id, lastNameInput, firstNameInput, cityInput, countryInput, employerInput, titleInput, favoriteMoviesInput,newToggle,editToggle} = this.state;
    let cardIndex = this.props.currentCard;
    let favoriteMovies;
    let cardList = [...this.props.cardList]
    let cardContent;
    let aside;
    // Prevent errors due to lack of renderable cords
    if (cardList.length>0) {
     favoriteMovies =  cardList[cardIndex].favoriteMovies.map((el, index) => (<li key={index}>{el}</li>));
      }
    if (editToggle || newToggle) {
      // Edit and New view
      cardContent = (
      <div className='card'>
        <h1>
          <input type='text' placeholder='First name' onChange={e=> (this.handleChange('firstNameInput',e.target.value))} value={firstNameInput}></input>
          <input type='text' placeholder='Last Name' onChange={e=> (this.handleChange('lastNameInput',e.target.value))} value={lastNameInput}></input>
        </h1>
        <br/>
        <h2><strong>From: </strong>
        <input type='text' placeholder='City' onChange={e=> (this.handleChange('cityInput',e.target.value))} value={cityInput}></input>
        <input type='text' placeholder='Country' onChange={e=> (this.handleChange('countryInput',e.target.value))} value={countryInput}></input>
        </h2>
        <h2><strong>Job Title: </strong>
        <input type='text' placeholder='Job Title' onChange={e=> (this.handleChange('titleInput',e.target.value))} value={titleInput}></input>
        </h2>
        <h2><strong>Employer: </strong>
        <input type='text' placeholder='Employer' onChange={e=> (this.handleChange('employerInput',e.target.value))} value={employerInput}></input>
        </h2>
        <br/>
        <br/>
        <h3>Favorite Movies</h3>
        <textarea wrap='hard' className='movieInput' placeholder='Enter favorite movies separated by a comma' onChange={e=> (this.handleChange('favoriteMoviesInput',e.target.value))} value={favoriteMoviesInput}>
        </textarea>
      </div>
      );
    }  else if (!newToggle && !editToggle) {
      // Display only view
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

    //Change aside/counter logic for adding cards
    if (newToggle) {
      aside=<aside id='counter'>{cardList.length+1}/{cardList.length}</aside>
    } else {
      aside = <aside id='counter'>{cardIndex+1}/{cardList.length}</aside>}
    return (
      <div className='cardBox'>
        {aside}
        {cardContent}
        <EditDeleteNew 
          toggleNew={this.toggleNew} 
          toggleEdit={this.toggleEdit}
          deleteCard={this.deleteCheck}
          currentCard={this.props.currentCard}
          cardList={this.props.cardList}
          editTogVal={this.state.editToggle}
          newTogVal={this.state.newToggle}/>
        <NextPrev 
          incCard={this.props.incCard} 
          decCard={this.props.decCard}
          editTogVal={this.state.editToggle}
          newTogVal={this.state.newToggle}
          curCard={this.props.currentCard}
          cardList={this.props.cardList}/>
      </div>
    ); 
  };
}; 