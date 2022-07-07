import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCounter: 5},
  {id: 2, message: 'It\'s my first post', likesCounter: 5}
]

let dialogs = [
  {id: 1, name: 'Yury'},
  {id: 2, name: 'Anna'},
  {id: 3, name: 'Max'}
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'I\'m fine'}
]


ReactDOM.render(
  <BrowserRouter>
    <App
      posts={posts}
      dialogs={dialogs}
      messages={messages}
    />
  </BrowserRouter>,

  document.getElementById('root')
);