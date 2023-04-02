import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="panel-owner">
        <MdAdminPanelSettings />
        ADMIN
      </div>
    </div>
  );
}
