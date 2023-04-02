import React from "react";
import Pharmacist from "../../../images/pharmacist.avif";

function AddPharmacistForm() {
  return (
    <form>
      <div className="form-container">
        {/* Pharmacist Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Pharmacist Name*"
            className="pharmacist-name"
            required
          />
        </div>
        {/* Nurse Email */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address*"
            className="doctor-email"
            required
          />
        </div>
        {/* Nurse Department */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Department Name*"
            className="department-name"
            required
          />
        </div>
        {/* Nurse Address */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Address*"
            className="doctor-address"
            required
          />
        </div>
        {/* Nurse Phone no. */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Phone Number*"
            className="doctor-phone"
            required
          />
        </div>

        <div className="buttons-group">
          <input className="submit-btn" type="submit" value="Add Pharmacist" />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Pharmacist} alt="Department" className="form-image" />
      </div>
    </form>
  );
}
export default AddPharmacistForm;
