import React from 'react';

class SubmitQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "quote">
        <form id = "submitQuote">
          <h4>Get sassed by Yujin? You're not alone. Share your story.</h4>

          <input type = "text" id = "quote-jinMood" placeholder = "Enter a mood" />
          <textarea id = "quote-submission" placeholder = "Enter a quote..."  ></textarea>
          <button id = "submit-quote">Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitQuote;
