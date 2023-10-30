import logo from './logo.svg';
import './App.css';
import { MyComponent }  from "./MyComponent"; 
import MyFooter from './MyFooter';
import {NavBar} from './Nav'; 
import AllTheBooks from './AllTheBooks';

function App() {
  return (
    <>
      <NavBar />
      <header className="App-header">
        <MyComponent title="Welcome To My New App :)" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyFooter color="red">Footer</MyFooter>

      <AllTheBooks/>
      
      <welcome></welcome>
    </>
  );
}

export default App;
