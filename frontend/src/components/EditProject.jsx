import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    imageUrl: "",
    liveUrl: "",
    githubUrl: ""
  });

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`http://localhost:8000/api/projects/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const project = res.data;

        setFormData({
          ...project,
          technologies: project.technologies?.join(", ") || ""
        });
      } catch (err) {
        console.error("Failed to fetch project:", err);
        setStatus("Failed to load project.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const updatedData = {
      ...formData,
      technologies: formData.technologies.split(",").map(t => t.trim())
    };

    try {
      await axios.put(`http://localhost:8000/api/projects/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setStatus("Project updated successfully.");
      setTimeout(() => navigate("/admin/dashboard/projects"), 1500);
    } catch (err) {
      console.error("Error updating project:", err);
      setStatus("Failed to update project.");
    }
  };

  if (loading) return <p>Loading project...</p>;

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-primary text-center text-md-start">
        Edit Project
      </h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 p-md-5 border rounded-4 shadow bg-white"
      >
        {/* Title */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Project Title</label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Technologies */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Technologies (comma separated)
          </label>
          <input
            type="text"
            className="form-control"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
          />
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>

        {/* Live URL */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Live URL</label>
          <input
            type="text"
            className="form-control"
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleChange}
          />
        </div>

        {/* GitHub URL */}
        <div className="mb-3">
          <label className="form-label fw-semibold">GitHub URL</label>
          <input
            type="text"
            className="form-control"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary btn-lg px-4 mt-2"
        >
          Update Project
        </button>

        {/* Status Message */}
        {status && (
          <div className="mt-3 alert alert-info text-center">
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default EditProject;
