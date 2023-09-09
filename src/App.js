import './App.css';
import NavGuide from './components/Navbar';
import Main from './components/main';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
    <NavGuide/>
    <div className="content">
    <Main/>
    </div>
    </div>
  );
}

export default App;
