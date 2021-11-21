import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "../Components/List/List";
import Modal from "../Components/Modal/Modal";
import elements from "../Elements/ExportElements";
import TodoFormComponent from "../Components/TodoFormComponent/AddTodoFormComponent";
function MainLayout({ tasks, getInitData,modalVisiblity }) {
  // const [showModal, setShowModal] = useState(modalVisiblity);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("tasks"));
    if(getData ){
      getInitData(getData);
    }else {
      getInitData([])
    }
    // setShowModal(modalVisiblity)

  }, []);

  return (
    <>
      <TodoFormComponent />
            {modalVisiblity ?<Modal />:null}
      <elements.Div className="lists-container">
        <List className="list-container" tasks={tasks} listType="todo">

          <elements.P
            text="Todo List"
            className="lists-container__items todo-background-color list-title"
          />
        </List>

        <List className="list-container" tasks={tasks} listType="doing">
          <elements.P
            text="Doing List"
            className="lists-container__items doing-background-color list-title"
          />
        </List>

        <List className="list-container" tasks={tasks} listType="done">
          <elements.P
            text="Done List"
            className="lists-container__items done-background-color list-title"
          />
        </List>
      </elements.Div>
    </>
  );
}

const mapState = (state) => {
  return {
    tasks: state.tasks,
    modalVisiblity:state.modalVisiblity
  };
};

const mapDispatch = (dispatch) => {
  return {
    getInitData: (payload) => {
      dispatch({
        type: "GET_INIT_DATA",
        payload,
      });
    },
  };
};

export default connect(mapState, mapDispatch)(MainLayout);
