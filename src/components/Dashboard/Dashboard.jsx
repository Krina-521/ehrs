import React from "react";
// import { BsArrowBarLeft } from "react-icons/bs";
import "./dashboard.css";
// import SideNav from "../sideNav/SideNav";
// import Main from "./Main";
// import Header from "../headerBar/Header";
// import { MdAdminPanelSettings } from "react-icons/md";
import Patients from "../../images/Patients.avif";
import Doctor from "../../images/Doctor.avif";
import Nurse from "../../images/Nurse.avif";
import Receptionist from "../../images/Receptionist.avif";
import Pharmacist from "../../images/pharmacist.avif";
import Laboratorist from "../../images/Laboratorist.avif";
import Accountants from "../../images/Accountant.avif";
import Appointment from "../../images/Appointment.avif";
import Bed from "../../images/Bed.avif";
import BloodBank from "../../images/BloodBank.avif";
import Payments from "../../images/Payment.avif";
import Profile from "../../images/Profile.avif";

function dashboard() {
  return (
    <div className="main">
      {/* Main Container */}

      <div className="body-container">
        <div className="tile-one">
          <h1>6</h1>
          Patients
          <img src={Patients} alt="Patients" />
        </div>
        <div className="tile-two">
          <h1>5</h1>
          Doctor
          <img src={Doctor} alt="Doctor" />
        </div>
        <div className="tile-three">
          <h1>7</h1>Nurse
          <img src={Nurse} alt="Nurse" />
        </div>
        <div className="tile-four">
          <h1>2</h1>
          Receptionist
          <img src={Receptionist} alt="Receptionist" />
        </div>
        <div className="tile-five">
          <h1>3</h1>
          Pharmacist
          <img src={Pharmacist} alt="Pharmacist" />
        </div>
        <div className="tile-six">
          <h1>4</h1>
          Laboratorists
          <img src={Laboratorist} alt="Laboratorists" />
        </div>
        <div className="tile-seven">
          <h1>1</h1>
          Accountants
          <img src={Accountants} alt="Accountants" />
        </div>
        <div className="tile-eight">
          <h1>8</h1>
          Appointment
          <img src={Appointment} alt="Appointment" />
        </div>
        <div className="tile-nine">
          <h1>2</h1>
          Bed
          <img src={Bed} alt="Bed" />
        </div>
        <div className="tile-ten">
          <h1>#</h1>
          Blood Bank
          <img src={BloodBank} alt="Blood Bank" />
        </div>
        <div className="tile-eleven">
          <h1>$</h1>
          Payments
          <img src={Payments} alt="Payments" />
        </div>
        <div className="tile-twelve">
          <h1>@</h1>
          Profile
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
export default dashboard;
