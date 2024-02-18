//import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Page1 from './components/Page-1';
import Page2 from './components/Page-2';
import Page3 from './components/Page-3';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  //const [hadCreditCardLoan, setHadCreditCardLoan] = useState(false);
  //hadCreditCardLoan={hadCreditCardLoan} setHadCreditCardLoan={setHadCreditCardLoan}
  //console.log(hadCreditCardLoan)

  return (
    <>
      <Header />
      <Routes>
          <Route path="/form/page1" element={<Page1 />}></Route>
          <Route path="/form/page2" element={<Page2 />}></Route>
          <Route path="/form/page3" element={<Page3 />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
