import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }

  render() {
    var randomNum = Math.floor(Math.random() * (this.props.data.length));
    return (
      <div className="quote-blurb">
        <ul>
          <p className="giant-quotemarks">‘</p>
            { this.props.data[randomNum].message }
          <p className="giant-quotemarks">’</p>
        </ul>
      </div>
    )
  }
}

export default Quote;
