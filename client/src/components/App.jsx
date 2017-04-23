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

  collectQuote(e) {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      quoteText: e.target.value
    });

    // pass in value to axios. axios posts content to /submitquote endpoint
    axios.post('/submitquote', this.state.quoteText);
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
          { this.state.submitQuoteshowComponent && <SubmitQuote collectQuote = { this.collectQuote } /> }
          <TinyNav toggleSubmitQuote = { this.toggleSubmitQuote } />
        </div>
      </div>
    )
  }
}

export default App;
