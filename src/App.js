import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import './App.css';

function App() {
  return (
    <>
    
    <Navbar title="TextUtils" About="About Us" />
    <div className="container my=3">
    <TextForm heading="Enter Your Text"/>
    </div>
    </>
  );
}

export default App;
