import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function init() {
  axios.get('/properties.json')
    .then(res => {
      axios.defaults.baseURL=res.data.endpoint
      console.log(axios.defaults.baseURL)

    })
    .catch(error => {
      console.log(error)
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
init();
module.hot.accept();
