import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/exports";
import { RootState } from "./state/reducers/baseReducer";

function App() {

  const state = useSelector((state: RootState) => state.bank)
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  )
}

export default App;
