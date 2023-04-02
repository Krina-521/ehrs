import React from "react";
import Patient from "../../../images/Patient-form.avif";

function AddPatientForm() {
  const handleOnChange = () => {};
  return (
    <form>
      <div className="form-container">
        {/* Patient Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Patient Name*"
            className="patient-name"
            required
          />
        </div>
        {/* Patient Email */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address*"
            className="patient-email"
            required
          />
        </div>
        {/* Patient Department */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Department Name*"
            className="department-name"
            required
          />
        </div>

        <div className="input-group">
          {/* Patient Gender */}
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
          {/* Patient DOB */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="birth-date"
            required
          />
          {/* Patient Blood group */}
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
        {/* Patient Address */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Address*"
            className="patient-address"
            required
          />
        </div>
        {/* Patient Phone no. */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Phone Number*"
            className="patient-phone"
            required
          />
        </div>
        {/* Time of Registration */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Time of registration*"
            className="time-registration"
            required
          />
        </div>
        <div className="buttons-group">
          <input className="submit-btn" type="submit" value="Add Patient" />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Patient} alt="Department" className="form-image" />
      </div>
    </form>
  );
}
export default AddPatientForm;
