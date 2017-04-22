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

          <p className="leftQuoteMark"></p>
            <p className="message">{ this.props.data[randomNum].message }</p>
          <p className="rightQuoteMark"></p>
      </div>
    )
  }
}

export default Quote;
