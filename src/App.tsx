import './App.css'
import {Routes, Route} from 'react-router-dom';
import Page1 from './components/Page-1';
import Page2 from './components/Page-2';
import Page3 from './components/Page-3';
import Page4 from './components/Page-4';
import Page5 from './components/Page-5';
import Page6 from './components/Page-6';
import Page7 from './components/Page-7';
import Page8 from './components/Page-8';
import PageComplete from './components/Page-complete';
import PageSorry from './components/Page-sorry';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
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
          <Route path="/form/page8" element={<Page8 />}></Route>
          <Route path="/form/page-complete" element={<PageComplete />}></Route>
          <Route path="/form/page-sorry" element={<PageSorry />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
