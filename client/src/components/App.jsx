import React from 'react';
import ReactDOM from 'react-dom';
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
      submitQuoteShowComponent: false,
      submitSuccessComponent: false,
      mood: '',
      quoteText: ''
    },
    this.toggleSubmitQuote = this.toggleSubmitQuote.bind(this),
    this.toggleSubmitSuccess = this.toggleSubmitSuccess.bind(this),
    this.collectQuote = this.collectQuote.bind(this),
    this.getQuote = this.getQuote.bind(this)
  }

  toggleSubmitQuote(e) {
    { /* prevent link from navigating */ }
    e.preventDefault();
    this.setState({
      submitQuoteShowComponent: !this.state.submitQuoteShowComponent
    });
  }

  toggleSubmitSuccess(e) {
    { /* prevent link from navigating */ }
    e.preventDefault();
    this.setState({
      submitSuccessComponent: !this.state.submitSuccessComponent
    });
  }

  getQuote() {
    axios.get('/submitquote')
    .then(function(response) {
      console.log(response),
      this.setState({
        quoteText: response.data.quoteText,
        mood: response.data.mood,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  collectQuote(text, mood) {
    this.setState({
      quoteText: text,
      mood: mood,
      submitSuccessComponent: true,
      submitQuoteShowComponent: false
    });
    axios.post('/submitquote', {
      message: this.state.quoteText,
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
          <Nav jinButtons = { jinMoods } />

          <Quote data = { this.props.data }
            quoteText = { this.state.quoteText }
            mood = { this.state.mood } />

          { this.state.submitQuoteShowComponent && < SubmitQuote
            quoteText = { this.state.quoteText }
            mood = { this.state.mood }
            collectQuote = { this.collectQuote }
            collectMood = { this.collectMood }/> }

          { this.state.submitSuccessComponent && < SubmitSuccess /> }

          <TinyNav toggleSubmitQuote = { this.toggleSubmitQuote } />
        </div>
      </div>
    )
  }
}

export default App;
