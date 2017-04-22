import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import quotes from'../../data';

ReactDOM.render(<App data = { quotes }/>, document.getElementById('app'));
