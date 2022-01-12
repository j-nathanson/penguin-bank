import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";

function App() {

  // return the state inside the store
  // can do things like state.funds to just get that state data
  const state = useSelector(state => state)
  return (
    <div className="App">

    </div>
  );
}

export default App;
