import React from 'react'
import "./addTodoFormComponent.css"
import elements from '../../Elements/ExportElements'

function AddTodoForm() {
    return (
        <div className="container">
            <div className="add-form-box" >
                <elements.P
                    className="add-form-box__title"
                    text="Add New Task"
                />
                <elements.Form
                    className="add-form"
                    onSubmit={()=>{}}
                >

                    <elements.Input
                        className="add-form__input"
                        type="text"
                        placeholder="write new task"
                        id=""
                        formikGetFieldProps={{}}
                        key=""
                    />

                    <elements.Button
                        clickHandler={(e)=>{alert('clicked')}}
                        className="add-form__button"
                        title="Add Task"
                        type="submit"
                    />
                </elements.Form>
            </div>
        </div>
    )
}

export default AddTodoForm
