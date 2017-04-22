import React from 'react';

var Nav = (props) => (
  <div className="jinMood">
    <ul>

      {props.jinButtons.map(function(type, index){
        return <button key = {index} >{type}</button>;
      })}
    </ul>
  </div>
);

export default Nav;
