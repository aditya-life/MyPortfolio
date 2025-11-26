import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold text-primary fs-4" to="/admin/dashboard">
          Admin Panel
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/admin/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/admin/dashboard/messages">
                Messages
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/admin/dashboard/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/admin/dashboard/projects/add">
                Add Project
              </Link>
            </li>

            {/* Logout Button */}
            <li className="nav-item mt-2 mt-lg-0">
              <button
                className="btn btn-danger px-3 fw-semibold"
                onClick={logout}
              >
                Logout
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
