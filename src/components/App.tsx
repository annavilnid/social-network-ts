import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./NavBar/Navbar";
import {Profile} from "./Profile/Profile";

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
