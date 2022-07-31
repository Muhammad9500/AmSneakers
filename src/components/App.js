import React, {useState} from 'react'
import Header from "./header/Header"
import Screen from './screen/Screen';
import Main from './main/Main';
import Footer from './footer/Footer';
import "./App.css"
const App = () => {

  return (
  <>
    <Screen >
      <Header/>
      <Main/>
      <Footer/>
    </Screen>
  </>
  );
}

export default App;
