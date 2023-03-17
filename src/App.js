// import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Carousel from './component/Carousel';
import ContPhot from './component/ContPhot';
import Header from './component/Header';
import Navbar from './component/Navbar';
import SchoolMessage from './component/SchoolMessage';
import Welcome from './component/Welcome';

function App() {
  return (
    
    <>
    <Header/>
    <Navbar/>
    <Carousel/>
    <Welcome/>
    <SchoolMessage/>
    <ContPhot/>
    <Card/>
    </>

  );
}

export default App;
