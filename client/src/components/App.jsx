import React from 'react';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-addons-transition-group';
import axios from 'axios';

import Header from './Header';
import Nav from './Nav';
import Quote from './Quote';
import SubmitQuote from './SubmitQuote';
import SubmitSuccess from './SubmitSuccess';
import TinyNav from './TinyNav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
      message: '',
      mood: '',
      submitQuoteShowComponent: false,
      submitSuccessComponent: false
    },
    this.toggleSubmitQuote = this.toggleSubmitQuote.bind(this),
    this.toggleSubmitSuccess = this.toggleSubmitSuccess.bind(this),
    this.collectQuote = this.collectQuote.bind(this),
    this.genRandomQuote = this.genRandomQuote.bind(this)
  }

  componentDidMount() {
    this.genRandomQuote();
  }

  genRandomQuote(mood) {
    axios.get('/quote')
    .then( result => {
      this.setState({
        currentMessage: result.data.message,
        mood: result.data.mood
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  toggleSubmitQuote(e) {
    { /* prevent link from navigating */ }
    e.preventDefault();
    this.setState({
      submitQuoteShowComponent: !this.state.submitQuoteShowComponent,
      submitSuccessComponent: false
    });
  }

  toggleSubmitSuccess(e) {
    { /* prevent link from navigating */ }
    e.preventDefault();
    this.setState({
      submitSuccessComponent: !this.state.submitSuccessComponent
    });
  }

  collectQuote(text, mood) {
    this.setState({
      message: text,
      mood: mood,
      submitSuccessComponent: true,
      submitQuoteShowComponent: false
    });
    axios.post('/quote', {
      message: this.state.message,
      mood: this.state.mood
    })
    .then(function(response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    var jinMoods = ['Classic Jin', 'Ragejin\'', 'Nice Jin', 'Eugene'];
    return (
      <div>
        <div id="container">
          <Header />
          <hr />

          <Quote message = { this.state.currentMessage }
            mood = { this.state.mood }
            getQuote = { this.getQuote } />

          <hr />
          <Nav jinButtons = { jinMoods } genRandomQuote = { this.genRandomQuote } />
    
          { this.state.submitQuoteShowComponent && < SubmitQuote
            message = { this.state.message }
            mood = { this.state.mood }
            collectQuote = { this.collectQuote }
            collectMood = { this.collectMood }/> }

          { this.state.submitSuccessComponent && < SubmitSuccess /> }

        </div>
        <TinyNav toggleSubmitQuote = { this.toggleSubmitQuote } />

      </div>
    )
  }
}

export default App;
