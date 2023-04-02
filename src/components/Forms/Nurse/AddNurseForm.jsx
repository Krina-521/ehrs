import React from "react";
import Nurse from "../../../images/Nurse.avif";

function AddNurseForm() {
  const handleOnChange = () => {};
  return (
    <form>
      <div className="form-container">
        {/* Nurse Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Nurse Name*"
            className="nurse-name"
            required
          />
        </div>
        {/* Nurse Email */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address*"
            className="nurse-email"
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

        <div className="input-group">
          {/* Nurse Gender */}
          <select
            placeholder="Select Type"
            name="select-gender"
            id="select-gender"
            className="select-gender"
            onChange={handleOnChange}
          >
            <option>Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
          {/* Nurse DOB */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="birth-date"
            required
          />
          {/* Nurse Blood group */}
          <select
            placeholder="Select Blood Group"
            name="select-blood-group"
            id="select-blood-group"
            className="blood-group"
            onChange={handleOnChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        {/* Nurse Address */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Address*"
            className="nurse-address"
            required
          />
        </div>
        {/* Nurse Phone no. */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Phone Number*"
            className="nurse-phone"
            required
          />
        </div>

        <div className="buttons-group">
          <input className="submit-btn" type="submit" value="Add Nurse" />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Nurse} alt="Department" className="form-image" />
      </div>
    </form>
  );
}
export default AddNurseForm;
