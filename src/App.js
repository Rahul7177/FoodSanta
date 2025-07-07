import './App.css';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Error from './Pages/Error';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Discover from './Pages/Discover';
import Items from './Pages/Items';
import { Route, Routes } from "react-router";
import { AuthProvider } from './Context/AuthContext';
import MyAccount from './Pages/MyAccount';
import LoaderOverlay from './Components/LoaderOverlay';

function App() {
  return (
    <AuthProvider>
      <LoaderOverlay /> 
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/items" element={<Items />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
