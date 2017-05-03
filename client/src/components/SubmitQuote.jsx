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
    console.log("update inputs called");
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className = "quote">
        <form id="submitQuote" action="" onSubmit = {() => this.props.collectQuote(this.state)} >

          <h4>Get sassed by Yujin? You're not alone. Share your story.</h4>

          <textarea id="quote-submission" name="message" placeholder="Enter a quote..." onChange={ this.handleInputChange.bind(this)}></textarea>

          <label>Tag your quote</label>
            <select id="dropdown"  name="mood" onChange={this.handleInputChange.bind(this)} >

              {this.props.jinButtons.map((mood) => {
                return <option value={mood}>{mood}</option>
              })}

           </select>
          <button id="submit-quote">Submit</button>
        </form>
      </div>
    )
  }
}

export default SubmitQuote;
