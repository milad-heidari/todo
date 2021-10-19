import React, { useState } from "react";
import List from "../Components/List/List";
import ListItem from "../Components/List/ListItem";
import Modal from "../Components/Modal/Modal";
import elements from "../Elements/ExportElements";
import TodoFormComponent from "../Components/TodoFormComponent/AddTodoFormComponent";
function MainLayout() {
  const [showModal, setShowModal] = useState(false);

  // const modalHandler = () => {
  //   console.log("befor", showModal);
  //   setShowModal(!showModal);
  //   console.log("after", showModal);
  // };

  return (
    <>
      <TodoFormComponent />
      <Modal
        onClose={() => {
          setShowModal(false);
        }}
        setShow={showModal}
      />
      {/* <elements.Button
        clickHandler={modalHandler}
        className=""
        title="show modal"
      /> */}
      <elements.Div className="lists-container">
        <elements.Div className="list-container">
          <elements.P
            text="Todo List"
            className="lists-container__items todo-background-color list-title"
          />

          <elements.Div className="">
            <elements.Div className="list-item">
              <elements.P
                text="sample itemssssss"
                className="list-title__item"
              />
            </elements.Div>
          </elements.Div>
        </elements.Div>

        <elements.Div className="list-container">
          <elements.P
            text="Doing List"
            className="lists-container__items doing-background-color list-title"
          />

          <elements.Div className="">
            <elements.Div className="list-item">
              <elements.P
                text="sample itemssssss"
                className="list-title__item"
              />
            </elements.Div>
          </elements.Div>
        </elements.Div>

        <elements.Div className="list-container">
          <elements.P
            text="Done List"
            className=" done-background-color list-title"
          />

          <elements.Div className="">
            <elements.Div className="list-item">
              <elements.P
                text="sample itemssssss"
                className="list-title__item"
              />
            </elements.Div>
          </elements.Div>
        </elements.Div>
      </elements.Div>
    </>
  );
}

export default MainLayout;
