import React, { useState } from "react";
import { connect } from "react-redux";
import elements from "../../Elements/ExportElements";
import "./modal.css";
function Modal({ tasks, dataForModal, setModalVisiblity, SetUpdatedTasks }) {
  const [modalInputData, setModalInputData] = useState(dataForModal);

  const onChangeHandler = (e) => {
    setModalInputData({ ...modalInputData, title: e.target.value });
  };

  const taskStatusHandler = (e) => {
    setModalInputData({ ...modalInputData, taskStatus: e.target.value });
  };

  const saveBtnHandler = (e) => {
    e.preventDefault();

    // update tasks array to new value.
    const updatedTasks = tasks.map((task) => {
      if (task.id === modalInputData.id) {
        return modalInputData;
      } else {
        return task;
      }
    });

    // dispatch for update redux state
    SetUpdatedTasks(updatedTasks);

    // update localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // change modal visiblity to false for close modal.
    setModalVisiblity(false);
  };

  const deleteBtnHandler = (e) => {
    e.preventDefault();

    // update tasks array to new value.
    const filteredTasks = tasks.filter((task) => {
      if (task.id === modalInputData.id) {
        return null;
      } else {
        return task;
      }
    });

    // dispatch for update redux state
    SetUpdatedTasks(filteredTasks);

    // update localStorage
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));

    // change modal visiblity to false for close modal.
    setModalVisiblity(false);
  };
  return (
    <elements.Div className="modal">
      <elements.Div className="modal-content">
        <elements.Div className="modal-header">
          {/* header  */}
          <h4>{`edit task ${dataForModal.title}`}</h4>
        </elements.Div>

        <elements.Div className="modal-body">
          {/* body  */}
          <elements.Form className="" onSubmit={() => {}}>
            <elements.P text="change task title" className="" />
            <elements.Input
              className="edit-input"
              type="text"
              inputValue={modalInputData.title || ""}
              placeholder={dataForModal.title}
              id="input"
              onChange={(e) => {
                onChangeHandler(e);
              }}
            />
            <elements.Div className="">
              <elements.P text="choose task status" className="" />
              <select
                className="edit-select"
                onChange={(e) => {
                  taskStatusHandler(e);
                }}
                value={modalInputData.taskStatus}
                id="taskStatus"
              >
                <option value="todo">todo</option>
                <option value="doing">doing</option>
                <option value="done">done</option>
              </select>
            </elements.Div>
            <elements.Div className="formBtnContainer">
              <elements.Button
                className="saveBtn"
                type="submit"
                clickHandler={(e) => {
                  saveBtnHandler(e);
                }}
                title="save task"
              />
              <elements.Button
                className="deleteBtn"
                type="submit"
                clickHandler={(e) => {
                  deleteBtnHandler(e);
                }}
                title="delete task"
              />
              <elements.Button
                className="cancelBtn"
                type="submit"
                clickHandler={() => {
                  setModalVisiblity(false);
                }}
                title="cancel"
              />
            </elements.Div>
          </elements.Form>
        </elements.Div>

        <elements.Div className="modal-footer">{/* footer */}</elements.Div>
      </elements.Div>
    </elements.Div>
  );
}

const mapState = (state) => {
  return {
    tasks: state.tasks,
    modalVisibilty: state.modalVisibilty,
    dataForModal: state.dataForModal,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setModalVisiblity: (payload) => {
      dispatch({
        type: "SET_MODAL_VISIBILITY",
        payload,
      });
    },
    SetUpdatedTasks: (payload) => {
      dispatch({
        type: "UPDATED_TASKS",
        payload,
      });
    },
  };
};

export default connect(mapState, mapDispatch)(Modal);
