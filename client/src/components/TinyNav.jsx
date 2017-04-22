import React from 'react';

var TinyNav = (props) => (
  <footer>
    <div><a href="/" onClick = { props.toggleSubmitQuote } >Submit a quote</a></div>
  </footer>
);

export default TinyNav;
