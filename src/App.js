import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import { changeNumVal } from './config/reducers/inc_decVal';
import { incVal,decVal } from './config/action';

function App() {

  const myState = useSelector(state => state.changeNumVal);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div style={{alignItems:'center'}}>
        <h1>Redux Boiler Plate</h1>
      </div>
      <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
        <button onClick={()=>dispatch(decVal(5))} style={{height:30,width:50}}>minus</button>
        <p>{myState}</p>
        <button onClick={()=>dispatch(incVal())} style={{height:30,width:50}}>plus</button>
      </div>
    </div>
  );
}

export default App;
