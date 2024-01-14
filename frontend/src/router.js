import { createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup.jsx';
import Signin from './Pages/Signin.jsx';
import Signinfalse from './Pages/Signinfalse.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import OurServ from './Pages/OurServ.jsx';
import Aticles from './Pages/Articles.jsx';
import Programming from './Pages/Programming.jsx';



const router = createBrowserRouter([
	{
		path: '/Signin',
		element: <Signin />,
		children: [
            {
				path: '/signinfalse',
				element: <Signinfalse/>,
			},
            {
				path: '/signup',
				element: <Signup/>,
			}
		],
	},
	{
		path: '/',
		element: <Home />,
		children: [

            {
				path: '/about-us',
				element: <AboutUs />,
			},
			{
				path: '/contact-us',
				element: <ContactUs />,
			},
			{
				path: '/our-services',
				element: <OurServ />,
			},
			{
				path: '/articles',
				element: <Aticles />,
			},
			{
				path: '/programming',
				element: <Programming />,
			}
		],
	},
]);

export default router;
