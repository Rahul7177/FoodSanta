import './App.css';
import Home from './Pages/home';
import About from './Pages/about';
import Services from './Pages/services';
import Contact from './Pages/contact';
import Error from './Pages/error';
import Signup from './Pages/signup';
import Login from './Pages/login';
import Discover from './Pages/discover';
import Items from './Pages/items';
import { Route, Routes } from "react-router";
import { AuthProvider } from './Context/AuthContext';


function App() {

  return (
    <AuthProvider>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route path="/services" element ={<Services/>} ></Route>
      <Route path="/about"element={<About/>} ></Route>
      <Route path="/contact"element={<Contact/>} ></Route>
      <Route path="/signup"element={<Signup/>} ></Route>
      <Route path="/login"element={<Login/>} ></Route>
      <Route path="/items"element={<Items/>} ></Route>
      <Route path="/discover"element={<Discover/>} ></Route>
      <Route path="*" element={<Error/>} ></Route>

      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
