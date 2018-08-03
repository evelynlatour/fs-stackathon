import React from 'react';
import ReactDOM from 'react-dom';
import '../public/style.css';
import App from './components/App';
import Routes from './routes';

ReactDOM.render(
  <Routes />,
  document.getElementById(`app`),
);
