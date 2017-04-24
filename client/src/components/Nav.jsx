import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jinMood">
        <ul><span id ="pickmood">Gimme a quote:</span>
          <button onClick={ this.props.genRandomQuote } >{this.props.jinButtons[0]}</button>
          <button onClick={ this.props.genRandomQuote2 } >{this.props.jinButtons[1]}</button>
          <button onClick={ this.props.genRandomQuote3 } >{this.props.jinButtons[2]}</button>
          <button onClick={ this.props.genRandomQuote4 } >{this.props.jinButtons[3]}</button>
        </ul>
      </div>
    )
  }
}


export default Nav;
