import React from 'react';

var TinyNav = (props) => (
  <footer>
    <div><a href="/" onClick = { (e)=> props.toggleSubmitQuote(e) } > Submit a quote</a></div>
  </footer>
);

export default TinyNav;
