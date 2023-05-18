import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made by Christina B©</h2>
      <p>
        <ul>
          <a href="https://github.com/Christinaecb">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/christina-barberi-7a4698235/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/christinaecb/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;