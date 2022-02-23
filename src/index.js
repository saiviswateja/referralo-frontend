import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './redux/StateProvider';
import RootReducer from './redux/RootReducer';
import axios from 'axios';
import Cookies from 'universal-cookie';

const intialState = {};

axios.interceptors.request.use(
  (req) => {
    const cookies = new Cookies();
    let accessToken = cookies.get("token");
    req.headers.Authorization = "Bearer " + accessToken;
    console.log(req);
    return req;
  },
  (err) => {
    console.log("came here bro");
     return Promise.reject(err);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <StateProvider intialState={intialState} reducer={RootReducer}>
      <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
