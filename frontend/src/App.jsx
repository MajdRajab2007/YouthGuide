// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup.jsx';
import Signin from './Pages/Signin.jsx';
import Signinfalse from './Pages/Signinfalse.jsx';
import Home from './Pages/Home.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import OurServ from './Pages/OurServ.jsx';
import Aticles from './Pages/Articles.jsx';
import Programming from './Pages/Programming.jsx';


function App() {
        

    return (

          <>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/our-services' element={<OurServ />} />
            <Route path='/articles' element={<Aticles />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signinfalse' element={<Signinfalse />} />
            <Route path='/programming' element={<Programming />} />
            </Routes>

          </>

  );
}

export default App;
