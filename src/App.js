import './App.css';
import About from './screens/About';
import Home from './screens/Home'
import Calculator from './screens/Calculator';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './screens/ContactUs';
import Education from './screens/Education';
import Skills from './screens/Skills';

// Functional Component - the function which return the UI/html
// Unidirectional means putting the brain/logic from the javascript, and not giving the control to the UI/html
 
// function allows us to exploit the hoisting functionality
const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />

  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/calculator',
    element: <Calculator />
  },
  {
    path: '/contact',
    element: <ContactUs />
  },
  {
    path: '/education',
    element: <Education />
  },
  {
    path: '/skills',
    element: <Skills />
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;