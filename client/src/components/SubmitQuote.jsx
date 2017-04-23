import React from 'react';

class SubmitQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "quote">
        <form id = "submitQuote" action = "" onSubmit = { this.props.collectQuote } >
          <h4>Get sassed by Yujin? You're not alone. Share your story.</h4>

          <label>Pick a JIN mood</label>
            <select className="dropdown">
             <option value="classic">ClassicJin</option>
             <option value="rage">Ragejin</option>
             <option value="nice">NiceJin</option>
             <option value="eugene">Eugene</option>
           </select>
          <textarea id = "quote-submission" placeholder = "Enter a quote..."  ></textarea>
          <button id = "submit-quote">Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitQuote;
