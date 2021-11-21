
import './App.css';
import {todoList} from "./data/data";

function App() {

  return (<div>
              {
                todoList.map(todoItem => {
                  return (
                      <div>{todoItem.action}-{todoItem.priority.toString()}</div>);
                })
              }
         </div>);
}

export default App;
