import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import PropComp from './components/PropComp';
import GreetingsClassComp from './components/GreetingsClassComp';
import MyCard from './components/MyCard';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div class="App">
      <NavBar/>
      <Header/>
     <h1> Hello!</h1>
     <Greetings/>
     <PropComp name="P"/>
     <GreetingsClassComp/>
     <MyCard/>
     <Footer/>
    </div>
  );
}

export default App;
