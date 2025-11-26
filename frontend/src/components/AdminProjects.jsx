import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:8000/api/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(res.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/project/edit/${id}`);
  };

  return (
    <div className="container py-4">
      
      <h2 className="fw-bold text-primary text-center mb-4">
        All Projects
      </h2>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary"></div>
          <p className="mt-3 fw-semibold text-secondary">Loading projects...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="alert alert-info text-center fw-semibold">
          No projects found.
        </div>
      ) : (
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={project._id}>
              <div className="card shadow-sm rounded-4 h-100 border-0">

                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    className="card-img-top rounded-top-4"
                    alt={project.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">
                    {project.title}
                  </h5>

                  <p className="text-secondary" style={{ minHeight: "60px" }}>
                    {project.description}
                  </p>

                  <p className="fw-semibold small">
                    <span className="text-primary">Tech:</span>{" "}
                    {project.technologies?.join(", ")}
                  </p>
                </div>

                <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">

                  <div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-success me-2"
                      >
                        Live
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-dark"
                      >
                        GitHub
                      </a>
                    )}
                  </div>

                  <div>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(project._id)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(project._id)}
                    >
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default AdminProjects;
