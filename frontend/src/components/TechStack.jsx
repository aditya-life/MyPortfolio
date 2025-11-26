import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiPhp,
  SiMysql
} from "react-icons/si";

const TechStack = () => {
  const skills = [
    { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7D12F6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
    { name: "PHP", icon: <SiPhp size={40} color="#777BB4" /> },
    { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F1502F" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#00618A" /> },
  ];

  return (
    <section className="container py-5" id="techstack">
      <h1 className="display-5 fw-bold text-center text-primary mb-5">
        Tech Stack
      </h1>

      <div className="row g-4 justify-content-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-lg-3 text-center"
          >
            <div
              className="p-4 shadow-sm rounded-4 bg-white h-100 d-flex flex-column align-items-center justify-content-center"
              style={{
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
              }}
            >
              {skill.icon}
              <h6 className="mt-3 fw-semibold">{skill.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
