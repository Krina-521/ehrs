import React from "react";
import Accountant from "../../../images/Accountant.avif";

function AddAccountantForm() {
  const handleOnChange = () => {};
  return (
    <form>
      <div className="form-container">
        {/* Accountant Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Accountant Name*"
            className="accountant-name"
            required
          />
        </div>
        {/* Accountant Email */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address*"
            className="accountant-email"
            required
          />
        </div>
        {/* Accountant Address */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Address*"
            className="accountant-address"
            required
          />
        </div>
        {/* Accountant Phone no. */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Phone Number*"
            className="accountant-phone"
            required
          />
        </div>
        <div className="input-group">
          {/* Accountant Gender */}
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
          {/* Accountant DOB */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="birth-date"
            required
          />
          {/* Accountant Blood group */}
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
        {/* Accountant Department */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Department Name(optional)"
            className="department-name"
          />
        </div>
        <div className="buttons-group">
          <input className="submit-btn" type="submit" value="Add Accountant" />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Accountant} alt="Department" className="form-image" />
      </div>
    </form>
  );
}
export default AddAccountantForm;
