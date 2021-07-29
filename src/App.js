import List from './Layout/List/List'
import "./app.css"
import AddTodoFormLayout from './Layout/TodoFormLayout/AddTodoFormLayout'
function App() {
  return (
    <div className="App">
      <AddTodoFormLayout/>
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
