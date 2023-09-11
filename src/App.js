import './App.css';
import NavGuide from './components/Navbar';
import Main from './components/main';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <NavGuide/>
    <div className="content">
    <Main/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
