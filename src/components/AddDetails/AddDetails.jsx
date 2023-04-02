import React, { useState, useEffect } from "react";
import AddAccountantForm from "../Forms/Accountant/AddAccountantForm";
import AddDepartmentForm from "../Forms/Department/AddDepartmentForm";
import AddDoctorForm from "../Forms/Doctor/AddDoctorForm";
import AddLaboratoristForm from "../Forms/Laboratorist/AddLaboratoristForm";
import AddNurseForm from "../Forms/Nurse/AddNurseForm";
import AddPatientForm from "../Forms/Patient/AddPatientForm";
import AddPharmacistForm from "../Forms/Pharmacist/AddPharmacistForm";
import AddReceptionistForm from "../Forms/Receptionist/AddReceptionistForm";

import "./addDetails.css";

function AddDetails() {
  const [detailsType, setDetailsType] = useState("selectDetailType");
  const [departmentContent, setDepartmentContent] = useState(false);
  const [doctorContent, setDoctorContent] = useState(false);
  const [patientContent, setPatientContent] = useState(false);
  const [nurseContent, setNurseContent] = useState(false);
  const [pharmacistContent, setPharmacistContent] = useState(false);
  const [laboratoristContent, setLaboratoristContent] = useState(false);
  const [accountantContent, setAccountantContent] = useState(false);
  const [receptionistContent, setReceptionistContent] = useState(false);

  useEffect(() => {
    detailsType === "department"
      ? setDepartmentContent(true)
      : setDepartmentContent(false);
    detailsType === "doctor" ? setDoctorContent(true) : setDoctorContent(false);
    detailsType === "patient"
      ? setPatientContent(true)
      : setPatientContent(false);
    detailsType === "nurse" ? setNurseContent(true) : setNurseContent(false);
    detailsType === "pharmacist"
      ? setPharmacistContent(true)
      : setPharmacistContent(false);
    detailsType === "laboratorist"
      ? setLaboratoristContent(true)
      : setLaboratoristContent(false);
    detailsType === "accountant"
      ? setAccountantContent(true)
      : setAccountantContent(false);
    detailsType === "receptionist"
      ? setReceptionistContent(true)
      : setReceptionistContent(false);

    return () => {};
  }, [detailsType]);

  const handleOnChange = (event) => {
    setDetailsType(event.target.value);
  };

  const makeFirstLetterCapital = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  const renderResult = () => {
    let result;
    detailsType === "selectDetailType"
      ? (result = "")
      : (result = makeFirstLetterCapital(detailsType));
    return result;
  };
  return (
    <div className="addDetails-container">
      <div className="addDetails-dropdown">
        <select
          placeholder="Select Type"
          name="select-type"
          id="select-type"
          className="form-type-select"
          value={detailsType}
          onChange={handleOnChange}
        >
          <option value="selectDetailType">Select Detail Type</option>
          <option value="department">Department</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="nurse">Nurse</option>
          <option value="pharmacist">Pharmacist</option>
          <option value="laboratorist">Laboratorist </option>
          <option value="accountant">Accountant</option>
          <option value="receptionist">Receptionist</option>
        </select>
      </div>
      <div className="addDetails-component">
        {/* Condition based Component */}
        <h2>Add {renderResult()}</h2>
        <div className="dynamic-forms">
          {departmentContent && <AddDepartmentForm />}
          {doctorContent && <AddDoctorForm />}
          {patientContent && <AddPatientForm />}
          {nurseContent && <AddNurseForm />}
          {pharmacistContent && <AddPharmacistForm />}
          {laboratoristContent && <AddLaboratoristForm />}
          {accountantContent && <AddAccountantForm />}
          {receptionistContent && <AddReceptionistForm />}
        </div>
      </div>
    </div>
  );
}

export default AddDetails;
