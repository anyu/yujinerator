import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

var quotes = [{
  "mood": "Rajin",
  "message": "TABITHAAAAAAA!!!!",
}]

ReactDOM.render(<App data = { quotes }/>, document.getElementById('app'));
