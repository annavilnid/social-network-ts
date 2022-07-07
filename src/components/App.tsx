import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./NavBar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";

export type DataType = {
  posts: Array<MyPostType>
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

export type MyPostType = {
  id: number
  message: string
  likesCounter: number
};

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

const App: React.FC<DataType> = (props) => {
  return (
    <div className="wrapper">
      <Header/>
      <Navbar/>
      <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/> } />
      <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/settings' component={Settings} />
    </div>
  );
}

export default App;
