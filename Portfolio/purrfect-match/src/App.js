import './App.css';
import Header from './MyComponents/header';
import Navbar from './MyComponents/navbar';
import Footer from './MyComponents/footer';

function App() {
  let Todos = [
    {
      sno: 1,
      title: "Go to Market",
      desc: "Chale jao"
    },
    {
      sno: 3,
      title: "Go to School",
      desc: "Chale jao"
    },
    {
      sno: 2,
      title: "Go to Mall",
      desc: "Chale jao"
    }
  ]
  return (
    <>
    <Navbar title="Purrfect Match"/>
    <Header Todos={Todos}/>
    <Footer/>
    </>
  );
}

export default App;
