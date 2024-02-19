//import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Page1 from './components/Page-1';
import Page2 from './components/Page-2';
import Page3 from './components/Page-3';
import Page4 from './components/Page-4';
import Page5 from './components/Page-5';
import Page6 from './components/Page-6';
import Page7 from './components/Page-7';
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
          <Route path="/form/page4" element={<Page4 />}></Route>
          <Route path="/form/page5" element={<Page5 />}></Route>
          <Route path="/form/page6" element={<Page6 />}></Route>
          <Route path="/form/page7" element={<Page7 />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
