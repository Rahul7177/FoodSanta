
import Navbar from '../Components/navbar';
import Header from '../Components/header';
import Info from '../Components/info';
import Join from '../Components/join';
import Footer from '../Components/footer';
function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Info/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default Home;
