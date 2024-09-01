import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from './DynamicTable/Table';
import MOCK_DATA from "./MOCK_DATA.json"

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state);

  return (
    <div className="App">
      {count}
      <button onClick={dispatch({type: "ADD"})}>add</button>
      <Table data={MOCK_DATA}/>
    </div>
  );
}

export default App;
