import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  render() {
    var jinTypes = ['Classic Jin', 'Ragejin\'', 'Nice Jin', 'U-Jean'];
    return (
      <div className="quote">
        <ul>
          <p className="giant-quotemarks">‘</p>
          <p>TABITHAAAAAAA!!!!</p>
          <p className="giant-quotemarks">’</p>
        </ul>
      </div>
    )
  }
}

export default Quote;
