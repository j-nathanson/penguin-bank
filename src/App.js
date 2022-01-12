import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {

  // return the state inside the store
  // can do things like state.account to just get that state data
  const state = useSelector(state => state);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, addUser } = bindActionCreators(actionCreators, dispatch);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(state.users.length, e.target[0].value)
  }

  const directory = state.users.map(user => {
    return (
      <h5 key={user.id}>{user.name}</h5>
    )
  })
  return (
    <div className="App">
      <h1>{state.account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>

      <h1>{directory}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
