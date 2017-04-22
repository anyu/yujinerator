import React from 'react';

class SubmitQuote extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="quote">
        <ul>
          <input id="quote" />
          <button id="submit-quote">Submit</button>
        </ul>
      </div>
    )
  }
}


export default SubmitQuote;
