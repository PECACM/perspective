import './App.css';
import Home from './components/Home';
import {useEffect} from "react";

function App(){
  useEffect(() => {
    document.title = "Perspective";
  }, []);
  return (
      <Home/>
  );
}

export default App;
