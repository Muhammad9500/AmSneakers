import React, {useState} from 'react'
import Header from "./header/Header"
import Screen from './screen/Screen';
import Main from './main/Main';
import Footer from './footer/Footer';
import ModalCheckout from './modalCheckout/modalCheckout';
import "./App.css"
const App = () => {
  const initialState = {
    name: "",
    comWay: "",
    number: "",
    textarea: ""
  }
  const [modalCheckout, setModalCheckout] = useState(false);
  const [formState, setFormState] = useState({ ...initialState });
  const classForModalCheckout = modalCheckout ? "open" : "close"

  return (
  <>
    <Screen >
      <Header/>
      <Main setModalCheckout={setModalCheckout}>
      
        </Main>
        <ModalCheckout modalCheckout={modalCheckout} classForModalCheckout={classForModalCheckout} setModalCheckout={setModalCheckout} initialState={initialState} formState={formState} setFormState={setFormState}/>
      <Footer/>
    </Screen>
  </>
  );
}

export default App;
