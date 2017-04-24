import React from 'react';

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quote-blurb">
          <p className="leftQuoteMark"></p>
            <p className="message">{ this.props.message }</p>
          <p className="rightQuoteMark"></p>
      </div>
    )
  }
}

export default Quote;
