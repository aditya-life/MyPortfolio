import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const timeline = [
    {
      role: "MERN Stack Developer Intern",
      company: "NCA. IT Solution",
      duration: "Jun 2025 – Present",
      desc: "Working on MERN-based projects, building reusable components, fixing bugs, improving UI/UX, and deploying production-ready features.",
    },
    {
      role: "MERN Stack Trainee",
      company: "Ducat, Noida",
      duration: "Jan 2025 – Jun 2025",
      desc: "Learned full-stack development, created APIs, authentication, CRUD apps, and mastered modern MERN workflows.",
    },
    // {
    //   role: "Technical Support Engineer",
    //   company: "Ramp Display Solutions Pvt Ltd",
    //   duration: "May 2023 – Jul 2025",
    //   desc: "Resolved complex technical issues, improved customer satisfaction, and enhanced internal technical processes.",
    // },
  ];

  return (
    <section className="container py-5" id="experience">
      <h2 className="display-5 fw-bold text-center mt-3 text-primary mb-5">Experience</h2>

      {/* GRID */}
      <div className="row g-4">
        {timeline.map((item, i) => (
          <div
            className="col-12 col-sm-6 col-lg-4"
            key={i}
          >
            <div
              className="shadow-sm border rounded-4 p-4 h-100 bg-white experience-card"
              style={{
                transition: "0.3s ease",
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center shadow"
                  style={{ width: "45px", height: "45px" }}
                >
                  <FaBriefcase size={20} />
                </div>

                <div>
                  <h5 className="fw-bold m-0">{item.role}</h5>
                  <small className="text-primary">{item.company}</small>
                </div>
              </div>

              <p className="text-muted">{item.duration}</p>

              <p className="mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Styling */}
      <style>
        {`
          .experience-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          }
        `}
      </style>
    </section>
  );
};

export default Experience;
