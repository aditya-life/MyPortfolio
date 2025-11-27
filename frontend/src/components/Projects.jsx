import { useState, useEffect } from "react";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/projects`);
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <></>;

  return (
    <section className="text-center container py-5" id="projects">
      <div className="row py-lg-4">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="display-5 fw-bold text-center mt-3 text-primary mb-5">My Projects</h1>
          <p className="lead text-body-secondary">
            Here are some of my featured projects.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {projects.map((project) => (
          <div className="col" key={project._id}>
            <div className="card h-100 shadow-sm border-0 rounded overflow-hidden">

              {/* Project Image */}
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
              )}

              {/* Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="fw-semibold">{project.title}</h5>

                <p className="card-text text-start small text-muted">
                  {project.description?.length > 230
                    ? project.description.slice(0, 230) + "..."
                    : project.description}
                </p>

                {/* Technologies */}
                <div className="mb-2 d-flex flex-wrap gap-2">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      className="badge text-bg-secondary fw-light"
                      key={idx}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto d-flex justify-content-between">

                  {project.liveUrl && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.liveUrl}
                      className="btn btn-sm btn-primary"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.githubUrl}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Code
                    </a>
                  )}

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
