import React from "react";
import Receptionist from "../../../images/Receptionist.avif";

function AddReceptionistForm() {
  const handleOnChange = () => {};
  return (
    <form>
      <div className="form-container">
        {/* Receptionist Name */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Receptionist Name*"
            className="receptionist-name"
            required
          />
        </div>
        {/* Receptionist Email */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Email Address*"
            className="receptionist-email"
            required
          />
        </div>
        {/* Receptionist Address */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Address*"
            className="receptionist-address"
            required
          />
        </div>
        {/* Receptionist Phone no. */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Phone Number*"
            className="receptionist-phone"
            required
          />
        </div>
        <div className="input-group">
          {/* Receptionist Gender */}
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
          {/* Receptionist DOB */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="birth-date"
            required
          />
          {/* Receptionist Blood group */}
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
        {/* Receptionist Department */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Department Name*"
            className="department-name"
            required
          />
        </div>
        <div className="buttons-group">
          <input
            className="submit-btn"
            type="submit"
            value="Add Receptionist"
          />
          <input className="reset-btn" type="button" value="Reset" />
        </div>
      </div>
      <div className="illustration-container">
        <img src={Receptionist} alt="Department" className="form-image" />
      </div>
    </form>
  );
}
export default AddReceptionistForm;
