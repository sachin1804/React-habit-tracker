import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Habit-tracker</h2>
      <ul className="navlist">
        <NavLink
          to="/"
          className="link"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : undefined,
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/details"
          className="link"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : undefined,
          })}
        >
          Details
        </NavLink>
      </ul>
    </div>
  );
}
