import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  render() {
    return (
      <div className="quote-blurb">
        <ul>
          <p className="giant-quotemarks">‘</p>
          {  }
          <p className="giant-quotemarks">’</p>
        </ul>
      </div>
    )
  }
}

export default Quote;
