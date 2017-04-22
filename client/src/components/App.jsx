import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Quote from './Quote';
import SubmitQuote from './SubmitQuote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     submitQuoteshowComponent: false,
   };
  }

  handleSubmitQuoteClick() {
    this.setState({
      submitQuoteshowComponent: !this.state.submitQuoteshowComponent,
    });
  }

  render() {
    var jinTypes = ['Classic Jin', 'Ragejin\'', 'Nice Jin', 'U-Jean'];
    return (
      <div>
        <div id="container">
          <Header />
          <Nav jinButtons = { jinTypes } />

        <Quote />

        </div>
      </div>
    )
  }
}

export default App;
