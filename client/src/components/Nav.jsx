import React from 'react';

var Nav = (props) => (
  <div className="jin-types">
    <ul>
      <div id ="step-one">Pick a Jin</div>
      {props.jinButtons.map(function(type){
        return <button>{type}</button>;
      })}
    </ul>

  </div>
);

export default Nav;
