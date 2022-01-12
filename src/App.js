import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {

  // return the state inside the store
  // can do things like state.account to just get that state data
  const account = useSelector(state => state.account);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
