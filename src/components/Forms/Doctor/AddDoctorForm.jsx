import React from "react";
import Doctor from "../../../images/Doctor.avif";
import "../Department/department.css";
import "./doctor.css";

function AddDoctorForm() {
  const handleOnChange = () => {};

  return (
    <form>
      <div className="form-container">
        {/* Doctor Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Doctor Name*"
            className="doctor-name"
            required
          />
        </div>
        {/* Doctor Email */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address*"
            className="doctor-email"
            required
          />
        </div>
        {/* Doctor Department */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Department Name*"
            className="department-name"
            required
          />
        </div>

        <div className="input-group">
          {/* Doctor Gender */}
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
          {/* Doctor DOB */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="birth-date"
            required
          />
          {/* Doctor Blood group */}
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
        {/* Doctor Address */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Address*"
            className="doctor-address"
            required
          />
        </div>
        {/* Doctor Phone no. */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Phone Number*"
            className="doctor-phone"
            required
          />
        </div>
        <div className="buttons-group">
          <input className="submit-btn" type="submit" value="Add Doctor" />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Doctor} alt="Department" className="form-image" />
      </div>
    </form>
  );
}
export default AddDoctorForm;
