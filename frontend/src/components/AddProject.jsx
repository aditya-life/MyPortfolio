import { useState } from "react";
import axios from "axios";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    imageUrl: "",
    liveUrl: "",
    githubUrl: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");
    const payload = {
      ...formData,
      technologies: formData.technologies.split(",").map(tech => tech.trim())
    };

    try {
      await axios.post("http://localhost:8000/api/projects", payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setStatus("Project added successfully!");
      setFormData({
        title: "",
        description: "",
        technologies: "",
        imageUrl: "",
        liveUrl: "",
        githubUrl: ""
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to add project.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="container py-5">
      <div className="col-lg-8 mx-auto">
        
        {/* Page Header */}
        <h2 className="mb-4 fw-bold text-center text-primary">
          Add New Project
        </h2>

        {/* Form Card */}
        <form 
          onSubmit={handleSubmit} 
          className="p-4 rounded-4 shadow bg-white"
        >

          <div className="mb-3">
            <label className="form-label fw-semibold">Project Title</label>
            <input
              type="text"
              className="form-control py-2"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control py-2"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short project description"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              className="form-control py-2"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, MongoDB"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Image URL</label>
            <input
              type="text"
              className="form-control py-2"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="e.g. https://your-image-link"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Live URL</label>
            <input
              type="text"
              className="form-control py-2"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              placeholder="Project live link"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">GitHub URL</label>
            <input
              type="text"
              className="form-control py-2"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="GitHub repository link"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-primary w-100 py-2 mt-3" 
            disabled={loading}
          >
            {loading ? "Submitting..." : "Add Project"}
          </button>

          {/* Status Message */}
          {status && (
            <div 
              className={`mt-3 text-center fw-semibold ${
                status.includes("success") ? "text-success" : "text-danger"
              }`}
            >
              {status}
            </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default AddProject;
