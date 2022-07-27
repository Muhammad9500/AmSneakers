import React, {useState} from 'react'
import Header from "./header/Header"
import Screen from './screen/Screen';
import Main from './main/Main';
import Footer from './footer/Footer';
import ModalCheckout from './modalCheckout/modalCheckout';
const App = () => {
  const [modalCheckout, setModalCheckout] = useState(false);
  return (
  <>
    <Screen >
      <Header/>
      <Main setModalCheckout={setModalCheckout}><ModalCheckout modalCheckout={modalCheckout}/></Main>
      <Footer/>
    </Screen>
  </>
  );
}

export default App;
