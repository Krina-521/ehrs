import React from "react";
import Laboratorist from "../../../images/Laboratorist.avif";

function AddLaboratoristForm() {
  return (
    <form>
      <div className="form-container">
        {/* Laboratorist Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Laboratorist Name*"
            className="laboratorist-name"
            required
          />
        </div>
        {/* Laboratorist Email */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address*"
            className="laboratorist-email"
            required
          />
        </div>
        {/* Laboratorist Address */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Address*"
            className="laboratorist-address"
            required
          />
        </div>
        {/* Laboratorist Phone no. */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Phone Number*"
            className="laboratorist-phone"
            required
          />
        </div>
        {/* Laboratorist Department */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Department Name(optional)"
            className="laboratorist-name"
          />
        </div>

        <div className="buttons-group">
          <input
            className="submit-btn"
            type="submit"
            value="Add Laboratorist"
          />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Laboratorist} alt="Laboratorist" className="form-image" />
      </div>
    </form>
  );
}
export default AddLaboratoristForm;
