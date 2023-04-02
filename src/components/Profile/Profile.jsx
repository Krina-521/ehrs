import React, { useState } from "react";
import "./profile.css";
import { SlSettings } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdPhoneAndroid } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Profile() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  //   password array set ?????
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-picture">
          <h2>Opubor Tony</h2>
          <p>opubortony@gmail.com</p>
        </div>
        <div className="profile-wrapper">
          <div className="profile-header">
            <SlSettings className="profile-icon" />
            <h2>PROFILE</h2>
          </div>

          <form>
            <div className="input-box">
              <BsPerson className="profile-icon" />
              <input type="text" className="input-field" placeholder="Name" />
            </div>
            <div className="input-box">
              <MdOutlineAlternateEmail className="profile-icon" />
              <input type="email" className="input-field" placeholder="Email" />
            </div>
            <div className="input-box">
              <MdPhoneAndroid className="profile-icon" />
              <input type="phone" className="input-field" placeholder="Phone" />
            </div>
            <div className="input-box">
              <FaRegAddressCard className="profile-icon" />
              <input
                type="text"
                className="input-field"
                placeholder="Address"
              />
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>{" "}
            {/* Update */}
          </form>
        </div>
      </div>
      <div className="change-password">
        <div className="change-password-header">
          <SlSettings className="profile-icon" />
          <h2>CHANGE PASSWORD</h2>
        </div>
        <div>
          <div className="input-group">
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              className="input-password-field"
              placeholder="Old Password"
            />
            <button
              className="password-visibility-btn"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
          <div className="input-group">
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              className="input-password-field"
              placeholder="New Password"
            />
            <button
              className="password-visibility-btn"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
          <div className="input-group">
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              className="input-password-field"
              placeholder="Confirm Password"
            />
            <button
              className="password-visibility-btn"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
          <button type="submit" className="submit-btn">
            Update
          </button>{" "}
          {/* Update */}
        </div>
      </div>
    </div>
  );
}
export default Profile;
