import React from 'react';

var Nav = (props) => (
  <div className="jinMood">
    <ul>
      <div id ="step-one">Pick a Jin mood</div>
      {props.jinButtons.map(function(type, index){
        return <button key = {index} >{type}</button>;
      })}
    </ul>
    <div><a href="/" onClick = { props.toggleSubmitQuote } >Submit a quote</a></div>
  </div>
);

export default Nav;
