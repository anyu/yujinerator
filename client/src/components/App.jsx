import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Quote from './Quote';
import SubmitQuote from './SubmitQuote';
import TinyNav from './TinyNav';
import axios from 'axios/dist/axios';

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitQuoteshowComponent: false,
      mood: '',
      quoteText: ''
    },
    this.toggleSubmitQuote = this.toggleSubmitQuote.bind(this),
    this.collectQuote = this.collectQuote.bind(this)
  }

  toggleSubmitQuote(e) {
    { /* prevent link from navigating */}
    e.preventDefault();
    this.setState({
      submitQuoteshowComponent: !this.state.submitQuoteshowComponent
    });
  }

  collectQuote(text, mood) {
    this.setState({
      quoteText: text,
      mood: mood
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
          <Quote data = {this.props.data} />
          { this.state.submitQuoteshowComponent && < SubmitQuote quoteText = { this.state.quoteText } mood = { this.state.mood } collectQuote = { this.collectQuote } collectMood = { this.collectMood }/> }
          <TinyNav toggleSubmitQuote = { this.toggleSubmitQuote } />
        </div>
      </div>
    )
  }
}

export default App;
