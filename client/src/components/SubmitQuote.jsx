import React from 'react';

class SubmitQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "quote">
        <form
          id = "submitQuote"
          action = ""
          onSubmit = { (e) => {
            e.preventDefault();
            var inputQuote = document.getElementById('quote-submission').value;
            var inputMood = document.getElementById('dropdown').value;
            this.props.collectQuote(inputQuote, inputMood)
          }}
        >
          <h4>Get sassed by Yujin? You're not alone. Share your story.</h4>

          <textarea id = "quote-submission" placeholder = "Enter a quote..." ></textarea>
          <label>Tag your quote</label>
            <select id ="dropdown"  >
             <option value={this.props.jinButtons[0]}>{this.props.jinButtons[0]}</option>
             <option value={this.props.jinButtons[1]}>{this.props.jinButtons[1]}</option>
             <option value={this.props.jinButtons[2]}>{this.props.jinButtons[2]}</option>
             <option value={this.props.jinButtons[3]}>{this.props.jinButtons[3]}</option>
           </select>
          <button id = "submit-quote">Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitQuote;
