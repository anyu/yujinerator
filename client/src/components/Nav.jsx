import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jinMood">

        <ul><span id ="pickmood">Gimme a quote:</span>
          {this.props.jinButtons.map((mood, index) => {
            return <button key = {index} onClick={ () => this.props.genRandomQuote(mood)} value = {mood} >{mood}</button>;
          },this)}
        </ul>

      </div>
    )
  }
}


export default Nav;
