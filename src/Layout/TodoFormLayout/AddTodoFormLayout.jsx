import React from 'react'
import "./addTodoFormLayout.css"
// import P from '../../Components/Partials/P'
// import Button from '../../Components/Partials/Button'
// import Input from '../../Components/Partials/Input'
import components from '../../Components/Partials/PatialsExport'

function AddTodoForm() {
    return (
        <div className="container">
            <div className="add-form-box" >
                <components.P
                    className="add-form-box__title"
                    text="Add New Task"
                />
                <components.Form
                    className="add-form"
                >

                    <components.Input
                        className="add-form__input"
                        type="text"
                        placeholder="write new task"
                        id=""
                        formikGetFieldProps={{}}
                        key=""
                    />

                    <components.Button
                        className="add-form__button"
                        title="Add Task"
                        type="submit"
                    />
                </components.Form>
            </div>
        </div>
    )
}

export default AddTodoForm
