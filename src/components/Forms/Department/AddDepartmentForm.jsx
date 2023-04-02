import React from "react";
import "./department.css";
import Department from "../../../images/Department.jpg";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

function AddDepartmentForm() {
  // const [modalShow, setModalShow] = useState(false);
  return (
    <form>
      <div className="form-container">
        {/* Department  Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Department Name"
            className="department-name"
            required
          />
        </div>
        {/* Description */}
        <div className="input-box">
          <textarea
            type="text"
            placeholder="Description"
            className="description"
            required
          />
        </div>
        {/* 
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        */}
        <div className="buttons-group">
          <input className="submit-btn" type="submit" value="Add Department" />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Department} alt="Department" className="form-image" />
      </div>
    </form>
  );
}
export default AddDepartmentForm;
