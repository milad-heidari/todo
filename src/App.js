import List from './Components/List/List'
import "./app.css"
import AddTodoFormComponent from './Components/TodoFormComponent/AddTodoFormComponent'
function App() {
  return (
    <div className="App">
      <AddTodoFormComponent/>
      <div className="lists-container">
        <List ListTitle="Todo List" className="lists-container__items">

        </List>

        <List ListTitle="Doing List" className="lists-container__items">

        </List>
        
        <List ListTitle="Done List" className="lists-container__items">

        </List>

      </div>
    </div>
  );
}

export default App;
