import React from 'react';

var Nav = (props) => (
  <div className="jin-types">
    <ul>
      <div id ="step-one">Pick a Jin</div>
        <div><a href="/" onClick = { props.toggleSubmitQuote } >Submit a quote</a></div>
      {props.jinButtons.map(function(type, index){
        return <button key = {index} >{type}</button>;
      })}
    </ul>

  </div>
);

export default Nav;
