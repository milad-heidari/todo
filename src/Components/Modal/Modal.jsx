import React,{useState} from "react";
import elements from "../../Elements/ExportElements";
import "./modal.css";
function Modal({ setShow,onClose }) {

  // const [ModalShow, setModalShow] = useState(setShow)

  if (!setShow) {
    return null;
  }
  return (
    <elements.Div className="modal">
      <elements.Div className="modal-content">
        <elements.Div className="modal-header">
          {/* header  */}
          <h4>edit modal</h4>
        </elements.Div>

        <elements.Div className="modal-body">
          {/* body  */}
          <elements.Input
            className="edit-input"
            type="text"
            inputValue={""}
            placeholder=""
            id=""
            formikGetFieldProps={{}}
            key=""
          />
          <elements.Div className="">
            <elements.P text="choose task status" />
            <select id="cars" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </elements.Div>
          <elements.Button clickHandler={onClose} title="cancel"/>
        </elements.Div>

        <elements.Div className="modal-footer">{/* footer */}</elements.Div>
      </elements.Div>
    </elements.Div>
  );
}

export default Modal;
