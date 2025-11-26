import { Instagram, Twitter, Github, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-light border-top py-2 mt-5">
      <div className="container d-flex flex-column align-items-center gap-2">

        {/* Social Icons */}
        <ul className="nav list-unstyled d-flex gap-3 m-0">
          <li>
            <a
              className="text-muted footer-icon-link"
              href="https://www.linkedin.com/in/aditya-life/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={24} />
            </a>
          </li>

          <li>
            <a
              className="text-muted footer-icon-link"
              href="https://github.com/aditya-life"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={24} />
            </a>
          </li>

          <li>
            <a
              className="text-muted footer-icon-link"
              href="https://x.com/RISK_LO?t=LRuPw3qJ2_xv9nYtUeDSkA&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter size={24} />
            </a>
          </li>

          <li>
            <a
              className="text-muted footer-icon-link"
              href="https://instagram.com/aadi_aditya_"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={24} />
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-muted mt-1 text-center">
          © {new Date().getFullYear()} MyPortfolio, All rights reserved.
        </div>
      </div>

      {/* Extra Styling */}
      <style>{`
        .footer-icon-link {
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-icon-link:hover {
          color: #0d6efd;
          transform: scale(1.05) translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
