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
import { useLocalState } from './until/useLocalStorage.jsx';
import PrivateRoute from './private-route/private-route.jsx';


function App() {
        const [jwt, setJwt] = useLocalState("", "jwt")

    return (

          <>

        <Routes>
            <Route path='/' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path='/about-us' element={
                  <PrivateRoute>
                  <AboutUs/>
              </PrivateRoute>
            } />
            <Route path='/contact-us' element={
                  <PrivateRoute>
                  <ContactUs/>
              </PrivateRoute>
            } />
            <Route path='/our-services' element={
                  <PrivateRoute>
                  <OurServ />
              </PrivateRoute>
            } />
            <Route path='/articles' element={
                  <PrivateRoute>
                  <Aticles />
              </PrivateRoute>
            } />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signinfalse' element={<Signinfalse />} />
            <Route path='/programming' element={
                  <PrivateRoute>
                  <Programming />
              </PrivateRoute>
            } />
            </Routes>

          </>

  );
}

export default App;
