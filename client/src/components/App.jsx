import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Quote from './Quote';
import SubmitQuote from './SubmitQuote';
import TinyNav from './TinyNav';
import axios from 'axios';

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
    this.collectQuote = this.collectQuote.bind(this),
    this.collectMood = this.collectMood.bind(this)
  }

  toggleSubmitQuote(e) {
    { /* prevent link from navigating */}
    e.preventDefault();
    this.setState({
      submitQuoteshowComponent: !this.state.submitQuoteshowComponent
    });
  }
// TODO: merge collect methods to one form collection that takes in 2 args
  collectMood(mood) {
    // e.preventDefault();
    console.log('mood', mood)
    this.setState({
      mood: mood
    });
  }

  // pass in value to axios. axios posts content to /submitquote endpoint
  // axios.post('/submitquote', this.state.quoteText);

  collectQuote(text) {
    // e.preventDefault();
    console.log('msg', text)
    this.setState({
      quoteText: text
    });

    // pass in value to axios. axios posts content to /submitquote endpoint
    // axios.post('/submitquote', this.state.quoteText);
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
