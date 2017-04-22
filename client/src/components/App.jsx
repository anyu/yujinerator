import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Quote from './Quote';
import SubmitQuote from './SubmitQuote';

import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitQuoteshowComponent: true,
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
          <Nav jinButtons = { jinMoods } toggleSubmitQuote = { this.toggleSubmitQuote }/>
          <Quote data = {this.props.data} />
          { this.state.submitQuoteshowComponent && <SubmitQuote /> }
        </div>
      </div>
    )
  }
}

export default App;
