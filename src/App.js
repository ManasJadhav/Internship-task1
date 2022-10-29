import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  return (
    <div className="font-OpenSans">
      <Navbar />
      <Home />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
