import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Header from './component/header';
// import Headernavi from './component/headernavi';
// import Youtubevedio from './youtubevedio';
import Drashboad from './component/drashboad';
import Home from './component/drashfile/Home';
import Shorts from './component/drashfile/Shorts';
import Subscribe from './component/drashfile/Subscribe';
import Contact from './component/drashfile/Contact';

import Headernew from './component/drashfile/Header';
// import Navbarss from './component/Navbarss';
// import Navbar1 from './navfloder/navbar1';
// import Howto from './howto';


function App() {
  return (
    <>
     {/* <Howto/> */}
    {/* <Navbarss/> */}
    {/* <Navbar1/> */}

    <Router>
      
      <Routes>
        <Route path='/' element={<Headernew/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={ <Contact/> }/>
          <Route path='/short' element={<Shorts/>}/>
          <Route path='/subscribe' element={<Subscribe/>}/>

        </Route>
      </Routes>
    </Router>


    {/* <Drashboad/> */}
     {/* <Header/>
     <Youtubevedio/> */}
     {/* <Headernavi/> */}
    </>
  );
}

export default App;
