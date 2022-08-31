import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiInfoOutline } from "react-icons/ti";
import { NavLink, Link } from "react-router-dom";
function SideAdminNav() {
  return (
    <div className="admin-side-nav">
      <div className="Dashboard">
        <RiDashboardLine style={{ color: "white", fontSize: "20px" }} />
        <NavLink
          to="/BigBoss/superadmin"
          className={({ isActive }) =>
            isActive ? "menu-list-Navlink" : "active-style"
          }
        >
          {" "}
          <h3>Dashboard</h3>{" "}
        </NavLink>
      </div>
      <div className="AddData">
        <IoMdAddCircleOutline style={{ color: "white", fontSize: "20px" }} />
        <NavLink
          to="/BigBoss/superadmin/addData"
          className={({ isActive }) =>
            isActive ? "active-style" : "menu-list-Navlink"
          }
        >
          {" "}
          <h3>Add</h3>
        </NavLink>
      </div>
      <div className="Dash-about">
        <TiInfoOutline style={{ color: "white", fontSize: "20px" }} />
        <h3>
          <Link style={{ color: "#e84545" }} to="/about">
            {" "}
            About{" "}
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default SideAdminNav;
