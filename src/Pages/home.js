import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Info from "../Components/Info";
import Join from "../Components/Join";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Info />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
