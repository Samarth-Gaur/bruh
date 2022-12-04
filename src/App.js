import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar title={"Brown Mundae"} about="Jaan Pehchan" Editor="Text Editor" home="ghar/Greh/Niketan"/>
      <div className="container">
      <TextForm heading={"Text Nu Likh Neechu "}/>
      </div>
    </>
    
  );
}

export default App;
