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
import Profile from './Pages/Profile.jsx';
import RoadMap from './Pages/RoadMap.jsx';
import GraphicDesign from './Pages/article-pages/Design-Ui/Graphic-Design.jsx';
import UIUX from './Pages/article-pages/Design-Ui/UI-UX.jsx';
import Canva from './Pages/article-pages/Design-Ui/Graphic Design/Canva.jsx';
import Photoshop from './Pages/article-pages/Design-Ui/Graphic Design/PhotoShop.jsx';
import BasicUiUx from './Pages/article-pages/Design-Ui/UI/Basic-UI-UX.jsx';
import BasicFigma from './Pages/article-pages/Design-Ui/UI/Basic-Figma.jsx';


function App() {
  // const [jwt, setJwt] = useLocalState("", "jwt")

  return (

    <>

      <Routes>
          <Route path='/profile' element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        <Route path='/' element={
        
            <Home />
          
        } />
        {/* <Route path='/about-us' element={
        
            <AboutUs />
          
        } /> */}
        <Route path='/contact-us' element={
        
            <ContactUs />
          
        } />
        <Route path='/our-services' element={
        
            <OurServ />
          
        } />
        <Route path='/blog' element={
        
            <Aticles />
          
        } />
        {/* <Route path='/road-map' element={
        
            <RoadMap />
          
        } /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signinfalse' element={<Signinfalse />} />
        <Route path='/programming' element={
        
            <Programming />
          
        } />
        <Route path='/programming/html' element={
        
            <HtmlPage />
          
        } />
        <Route path='/programming/css' element={
        
            <CssPage />
          
        } />
        <Route path='/programming/javascript' element={
        
            <JsPage />
          
        } />
        <Route path='/programming/c++' element={
        
            <CppPage />
          
        } />
        <Route path='/Designing-and-VideoEditing/Graphic-Design' element={
        
            <GraphicDesign />
          
        } />
        <Route path='/Designing-and-VideoEditing/Graphic-Design/Canva' element={
        
            <Canva />
          
        } />
        <Route path='/Designing-and-VideoEditing/Graphic-Design/Photoshop' element={
        
            <Photoshop />
          
        } />
        <Route path='/Designing-and-VideoEditing/ui-ux' element={
        
            <UIUX />
          
        } />
        <Route path='/Designing-and-VideoEditing/ui-ux/basics-ui-ux' element={
        
            <BasicUiUx />
          
        } />
        <Route path='/Designing-and-VideoEditing/ui-ux/basic-figma' element={
        
            <BasicFigma />
          
        } />
        <Route path='/programming/python' element={
        
            <PythonPage />
          
        } />
        <Route path='/programming/php' element={
        
            <PhpPage />
          
        } />
        {/* <Route path='/LeaderShip' element={
        
            <LeaderShip />
          
        } /> */}
        <Route path='/bullhorn' element={
        
            <BullHorn />
          
        } />
        <Route path='/Designing-and-VideoEditing' element={
        
            <DesigningandVideoEditing />
          
        } />
        <Route path='/blog/:lessonID' element={
        
            <Lesson />
          
        } />
      </Routes>

    </>

  );
}

export default App;
