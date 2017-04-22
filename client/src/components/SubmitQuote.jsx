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

          <label>Pick a JIN mood</label>
            <select class="dropdown">
             <option value="grapefruit">ClassicJin</option>
             <option value="lime">Ragejin</option>
             <option value="coconut">NiceJin</option>
             <option value="mango">U-JEAN</option>
           </select>
          <textarea id = "quote-submission" placeholder = "Enter a quote..."  ></textarea>
          <button id = "submit-quote">Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitQuote;
