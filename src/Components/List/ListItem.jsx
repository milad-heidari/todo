import React from "react";
import { connect } from "react-redux";
import elements from "../../Elements/ExportElements";
function ListItem({ data, setModalVisiblity, setDataForModal }) {
  return (
    <elements.Div
      onClickHandler={() => {
        setModalVisiblity(true);
        setDataForModal(data);
      }}
      className="list-item"
    >
      <elements.P 
        text={data.title} 
        className="list-title__item" />
      <elements.P
        text="click for more options"
        className="list-title__item-hover-text"
      />
    </elements.Div>
  );
}

const mapState = (state) => {
  return {
    modalVisiblity: state.modalVisiblity,
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
    setDataForModal: (payload) => {
      dispatch({
        type: "SET_DATA_FOR_MODAL",
        payload,
      });
    },
  };
};

export default connect(mapState, mapDispatch)(ListItem);
