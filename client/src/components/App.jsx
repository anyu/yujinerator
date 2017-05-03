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
      submitQuoteShowComponent: false,
      submitSuccessComponent: false
    },
    this.toggleSubmitQuote = this.toggleSubmitQuote.bind(this),
    this.toggleSubmitSuccess = this.toggleSubmitSuccess.bind(this),
    this.collectQuote = this.collectQuote.bind(this),
    this.genRandomQuote = this.genRandomQuote.bind(this)
  }

  componentDidMount() {
    var defaultMood = "Classic Jin";
    this.genRandomQuote(defaultMood);
  }

  genRandomQuote(mood) {
    axios.get('/quote', {
      params: {
        mood: mood
      }
    })
    .then( result => {
      this.setState({
        currentMessage: result.data.message,
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

  collectQuote(quote) {
    axios.post('/quote', {
      message: quote.message,
      mood: quote.mood
    })
    .then((response) => {
      this.setState({
        submitSuccessComponent: true,
        submitQuoteShowComponent: false
      });
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    var jinMoods = ['Classic Jin', 'Ragejin\'', 'Jin on Tap', 'Nice Jin'];
    return (
      <div>
        <div id="container">
          <Header />
          <hr />

          <Quote message = {this.state.currentMessage}/>

          <hr />
          <Nav jinButtons = { jinMoods } genRandomQuote = { this.genRandomQuote } />

          { this.state.submitQuoteShowComponent && < SubmitQuote
            jinButtons = { jinMoods }
            collectQuote = { this.collectQuote } /> }

          { this.state.submitSuccessComponent && < SubmitSuccess /> }

        </div>
        <TinyNav toggleSubmitQuote = { this.toggleSubmitQuote } />

      </div>
    )
  }
}

export default App;
