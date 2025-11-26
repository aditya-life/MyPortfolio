import { useEffect, useState } from "react";

const Hero = () => {
  const text = "Hello, I'm Aditya Kumar";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false); // stop cursor blinking
    }
  }, [index, text]);

  return (
    <section className="px-4 py-5 my-5 text-center" id="home">

      {/* Profile Image */}
      <img
        className="d-block mx-auto mb-4 shadow-sm border"
        src="/Aadi_icon.png"
        alt="Aditya Kumar"
        width={170}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      />

      {/* Typing Text */}
      <h1 className="display-5 fw-bold text-body-emphasis mt-3">
        {typedText}
        {isTyping && <span className="cursor">|</span>}
      </h1>

      {/* Subtitle */}
      <div className="col-lg-7 mx-auto">
        <p className="lead mb-4 text-muted">
          Full Stack Developer • MERN Specialist • Freelancer
        </p>

        {/* Buttons */}
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
          <a
            href="/Aditya_MERN_Stack.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg px-4 shadow-sm"
          >
            My Resume
          </a>

          <a
            href="#contact"
            className="btn btn-outline-secondary btn-lg px-4 shadow-sm"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Cursor CSS */}
      <style>{`
        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 0.7s infinite;
          font-weight: bold;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
