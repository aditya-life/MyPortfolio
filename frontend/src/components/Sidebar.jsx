import { Home, Mail, Folder, FolderPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  // Function to highlight active menu
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark d-none d-lg-flex shadow"
      style={{ width: 260, minHeight: "100vh" }}
    >
      {/* Header */}
      <Link
        to="/admin/dashboard"
        className="mb-3 text-white text-decoration-none d-flex align-items-center gap-2"
      >
        <span className="fs-4 fw-bold">Admin Panel</span>
      </Link>

      <hr className="border-secondary" />

      {/* Navigation */}
      <ul className="nav nav-pills flex-column gap-2 mb-auto">

        <li>
          <Link
            to="/admin/dashboard"
            className={`nav-link d-flex align-items-center gap-2 ${
              isActive("/admin/dashboard") ? "active" : "text-white"
            }`}
          >
            <Home size={18} />
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/admin/dashboard/messages"
            className={`nav-link d-flex align-items-center gap-2 ${
              isActive("/admin/dashboard/messages") ? "active" : "text-white"
            }`}
          >
            <Mail size={18} />
            Messages
          </Link>
        </li>

        <li>
          <Link
            to="/admin/dashboard/projects"
            className={`nav-link d-flex align-items-center gap-2 ${
              isActive("/admin/dashboard/projects") ? "active" : "text-white"
            }`}
          >
            <Folder size={18} />
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/admin/dashboard/projects/add"
            className={`nav-link d-flex align-items-center gap-2 ${
              isActive("/admin/dashboard/projects/add")
                ? "active"
                : "text-white"
            }`}
          >
            <FolderPlus size={18} />
            Add Project
          </Link>
        </li>

      </ul>

      <hr className="border-secondary" />

      {/* User Dropdown */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            src="/ankit.webp"
            alt="User"
            width={36}
            height={36}
            className="rounded-circle me-2 border"
          />
          <strong>{user?.email}</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link to="/" className="dropdown-item">
              View Portfolio
            </Link>
          </li>

          <li><a className="dropdown-item">Settings</a></li>
          <li><a className="dropdown-item">Profile</a></li>

          <li><hr className="dropdown-divider" /></li>

          <li>
            <button className="dropdown-item" onClick={logout}>
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
