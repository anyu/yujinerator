import React from 'react';

class SubmitQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      mood: 'Classic Jin'
    }
  }

  handleInputChange(e) {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className = "quote">
        <form id="submitQuote" action="" onSubmit = {(e) => this.props.collectQuote(this.state, e)} >

          <h4>Get sassed by Yujin? You're not alone. Share your story.</h4>

          <textarea id="quote-submission" name="message" placeholder="Enter a quote..." onChange={ this.handleInputChange.bind(this)}></textarea>

          <label>Tag your quote</label>
            <select id="dropdown"  name="mood" onChange={this.handleInputChange.bind(this)} >

              {this.props.jinButtons.map((mood, index) => {
                return <option key={index} value={mood}>{mood}</option>
              })}

           </select>
          <button id="submit-quote">Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitQuote;
