import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Quote from './Quote';
import SubmitQuote from './SubmitQuote';
import TinyNav from './TinyNav';

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitQuoteshowComponent: false,
    },
    this.toggleSubmitQuote = this.toggleSubmitQuote.bind(this)
  }

  toggleSubmitQuote(e) {
    { /* prevent link from navigating */}
    e.preventDefault();
    this.setState({
      submitQuoteshowComponent: !this.state.submitQuoteshowComponent,
    });
  }

  render() {
    var jinMoods = ['Classic Jin', 'Ragejin\'', 'Nice Jin', 'U-Jean'];
    return (
      <div>
        <div id="container">
          <Header />
          <hr />
          <Nav jinButtons = { jinMoods } />
          <Quote data = {this.props.data} />
          { this.state.submitQuoteshowComponent && <SubmitQuote /> }
          <TinyNav toggleSubmitQuote = { this.toggleSubmitQuote } />
        </div>
      </div>
    )
  }
}

export default App;
