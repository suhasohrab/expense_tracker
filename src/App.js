import React from 'react';

//importing css
import './App.css';

//importing components
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {Balance} from './Components/Balance';
import {Accountsummary} from './Components/Accountsummary';
import { Transactionhistory} from './Components/Transactionhistory';
import { Addtransaction} from './Components/Addtransaction';

//importing provider
import { GlobalProvider } from './Context/Globalstate';

function App() {
  return(
    <div className= "container">
      <GlobalProvider>
        <Header></Header>
        <div >
         <Balance />
         <Accountsummary />
         <Transactionhistory />
         <Addtransaction />
        </div>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
