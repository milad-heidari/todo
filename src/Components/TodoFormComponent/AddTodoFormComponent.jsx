import React from 'react'
import {connect} from 'react-redux'
import "./addTodoFormComponent.css"
import elements from '../../Elements/ExportElements'
import {useFormik} from 'formik'

function AddTodoForm({addNewTask}) {

    const currentValues = JSON.parse(localStorage.getItem('tasks'))


    const formik = useFormik({
        initialValues:{
            title:''
        },
        onSubmit: values =>{
            if (currentValues) {
                const newValue = {id:Math.round(Math.random()*10000),title:values.title,taskStatus:"todo"}
                addNewTask(newValue)
                const updatedValue = [...currentValues,newValue]
                localStorage.setItem("tasks",JSON.stringify(updatedValue))

            }else{
                const newValue = {id:Math.round(Math.random()*10000),title:values.title,taskStatus:"todo"}
                addNewTask(newValue)
                localStorage.setItem('tasks',JSON.stringify([newValue]))
            }
            // console.log('valll',values)
        }
    })

    return (
        <div className="container">
            <div className="add-form-box" >
                <elements.P
                    className="add-form-box__title"
                    text="Add New Task"
                    />
                <elements.Form
                    className="add-form"
                    onSubmit={formik.handleSubmit}
                    >

                    <elements.Input
                        className="add-form__input"
                        type="text"
                        placeholder="write new task"
                        inputValue={formik.values.title}
                        id="title"
                        onChange={formik.handleChange}
                        // formikGetFieldProps={{}}
                        key=""
                        />

                    <elements.Button
                        clickHandler={()=>{}}
                        className="add-form__button"
                        title="Add Task"
                        type="submit"
                        />
                </elements.Form>
            </div>
        </div>
    )
}

const mapDispatch = (dispatch)=>{
    return {
        addNewTask : (payload)=>{
            dispatch({
                type:'ADD_TASK',
                payload
            })
        }
    }
}

export default connect(null,mapDispatch)(AddTodoForm)
