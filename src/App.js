import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";

function App() {

  // return the state inside the store
  // can do things like state.account to just get that state data
  const account = useSelector(state => state.account)
  return (
    <div className="App">
      <h1>{account}</h1>
      <button>Deposit</button>
      <button>Withdraw</button>
    </div>
  );
}

export default App;
