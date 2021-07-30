import React from 'react'
import List from '../Components/List/List'
import TodoFormComponent from '../Components/TodoFormComponent/AddTodoFormComponent'
function MainLayout() {
    return (
        <>
            <TodoFormComponent/>
            <div className="lists-container">
        <List 
            ListTitle="Todo List" 
            className="lists-container__items todo-background-color"
            pClassName="list-title"
            >

        </List>

        <List 
            ListTitle="Doing List" 
            className="lists-container__items doing-background-color"
            pClassName="list-title"
            >

        </List>
        
        <List 
            ListTitle="Done List" 
            className="lists-container__items done-background-color"
            pClassName="list-title"
            >

        </List>

      </div>
        </>
    )
}

export default MainLayout
