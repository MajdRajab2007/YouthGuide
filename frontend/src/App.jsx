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
import PrivateRoute from './private-route/private-route.jsx';
import HtmlPage from './Pages/article-pages/Programming-pages/Html-Page.jsx';
import CssPage from './Pages/article-pages/Programming-pages/Css-Page.jsx';
import JsPage from './Pages/article-pages/Programming-pages/Js-Page.jsx';
import CppPage from './Pages/article-pages/Programming-pages/Cpp-Page.jsx';
import PythonPage from './Pages/article-pages/Programming-pages/Python-Page.jsx';
import PhpPage from './Pages/article-pages/Programming-pages/Php-Page.jsx';
import LeaderShip from './Pages/LeaderShip.jsx';
import BullHorn from './Pages/BullHorn.jsx';
import DesigningandVideoEditing from './Pages/Designing-and-VideoEditing.jsx';
import Lesson from './Pages/Lesson.jsx';


function App() {
        // const [jwt, setJwt] = useLocalState("", "jwt")

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
            <Route path='/blog' element={
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
            <Route path='/programming/html' element={
                  <PrivateRoute>
                  <HtmlPage />
              </PrivateRoute>
            } />
            <Route path='/programming/css' element={
                  <PrivateRoute>
                  <CssPage />
              </PrivateRoute>
            } />
            <Route path='/programming/javascript' element={
                  <PrivateRoute>
                  <JsPage />
              </PrivateRoute>
            } />
            <Route path='/programming/c++' element={
                  <PrivateRoute>
                  <CppPage />
              </PrivateRoute>
            } />
            <Route path='/programming/python' element={
                  <PrivateRoute>
                  <PythonPage />
              </PrivateRoute>
            } />
            <Route path='/programming/php' element={
                  <PrivateRoute>
                  <PhpPage />
              </PrivateRoute>
            } />
            <Route path='/LeaderShip' element={
                  <PrivateRoute>
                  <LeaderShip />
              </PrivateRoute>
            } />
            <Route path='/bullhorn' element={
                  <PrivateRoute>
                  <BullHorn />
              </PrivateRoute>
            } />
            <Route path='/Designing-and-VideoEditing' element={
                  <PrivateRoute>
                  <DesigningandVideoEditing />
              </PrivateRoute>
            } />
            <Route path='/blog/:lessonID' element={
                  <PrivateRoute>
                  <Lesson />
              </PrivateRoute>
            } />
            </Routes>

          </>

  );
}

export default App;
