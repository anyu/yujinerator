import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jinMood">
        <ul>
          {this.props.jinButtons.map(function(mood, index){
            return <button key = {index} onClick={ this.props.genRandomQuote } >{mood}</button>;
          },this)}
        </ul>
      </div>
    )
  }
}


export default Nav;
