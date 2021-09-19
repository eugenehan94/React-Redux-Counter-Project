import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { countAction } from "./redux/action/index";
function App() {
  const amount = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { increaseOne, decreaseOne, reset } = bindActionCreators(
    countAction,
    dispatch
  );

  return (
    <div className="container">
      <h1>Counter:</h1>
      <h2>{amount}</h2>

      <div className="button-container">
        <button onClick={() => increaseOne()}>Increase by 1</button>
        <button onClick={() => decreaseOne()}>Decrease by 1</button>
      </div>

      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
