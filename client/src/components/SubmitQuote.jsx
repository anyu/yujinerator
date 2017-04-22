import React from 'react';

class SubmitQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "quote">
          <form>
          <input type = "text" id = "quote-jinMood" placeholder = "Enter a mood" />
          <textarea id = "quote-submission" placeholder = "Enter a quote..."  ></textarea>
          <button id = "submit-quote">Submit</button>
          </form>
      </div>
    )
  }
}

export default SubmitQuote;
