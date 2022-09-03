import React from "react";
import "./list.css";
import PropTypes from "prop-types";
import elements from "../../Elements/ExportElements";
import ListItem from "../List/ListItem";

function List({ tasks, className, children, listType }) {
  // return (
  //   <ListItem data={task} key={index} />
  // );
// console.log('ttttttttttt',tasks)
  let filteredTasks = []
  
  if (tasks.length >= 1) {
     filteredTasks = tasks.filter((task) => {
        if (task.taskStatus === listType) {
          return task
        }else{return null}
      })
    }
    // else{
    //   return null
    // }
    // console.log(listType,filteredTasks)

  const renderList = (filteredTasks) => {
    if (filteredTasks.length >= 1) {
      // console.log('filter',filteredTasks)
     return filteredTasks.map((task, index) => {
        return <ListItem data={task} key={index} />;
      });
    } else {
      return (
        <elements.P
          text={`your ${listType} task list is empty`}
          className="list-title__item emptyList"
        />
      );
    }
  };
  return (
    <elements.Div className={className}>
      {children}
      {renderList(filteredTasks)}
    </elements.Div>
  );
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  tasks: PropTypes.array.isRequired,
  listType: PropTypes.string.isRequired,
};

export default List;
