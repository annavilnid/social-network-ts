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

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Navbar/>
      <Route path='/dialogs' component={Dialogs} />
      <Route path='/profile' component={Profile} />
      <Route path='/news' component={News} />
      <Route path='/music' component={Music} />
      <Route path='/settings' component={Settings} />
    </div>
  );
}

export default App;
