import React from "react";
import { ICONS } from "../../config/icons";

const Contact: React.FC = () => {
  return (
    <>
      <a href="mailto:kongpanat.tan@gmail.com">
        <button className="folder-contact">
          <div className="icon">
            <img
              className="icon-pic infolder-contact"
              src={ICONS.mailboxWorld}
              alt="email"
            />
          </div>
          <div className="icon-name">E-mail</div>
        </button>
      </a>

      <a
        href="https://www.linkedin.com/in/kongpanat-tangphonphisuth-92a62b223/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="folder-contact">
          <div className="icon">
            <img
              className="icon-pic infolder-contact"
              src={ICONS.linkedin}
              alt="linkedin"
            />
          </div>
          <div className="icon-name">LinkedIn</div>
        </button>
      </a>

      <a
        href="https://github.com/RyuNumchon/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="folder-contact">
          <div className="icon">
            <img
              className="icon-pic infolder-contact"
              src={ICONS.github}
              alt="github"
            />
          </div>
          <div className="icon-name">GitHub</div>
        </button>
      </a>

      <a
        href="https://www.facebook.com/kongpanatT/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="folder-contact">
          <div className="icon">
            <img
              className="icon-pic infolder-contact"
              src={ICONS.facebook}
              alt="fb"
            />
          </div>
          <div className="icon-name">Facebook</div>
        </button>
      </a>

      <a
        href="https://www.instagram.com/legitbuddha/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="folder-contact">
          <div className="icon">
            <img
              className="icon-pic infolder-contact"
              src={ICONS.instagram}
              alt="IG"
            />
          </div>
          <div className="icon-name">Instagram</div>
        </button>
      </a>

      <a
        href="https://twitter.com/Dadude50989656"
        target="_blank"
        rel="noreferrer"
      >
        <button className="folder-contact">
          <div className="icon">
            <img
              className="icon-pic infolder-contact"
              src={ICONS.twitter}
              alt="tweet"
            />
          </div>
          <div className="icon-name">Twitter</div>
        </button>
      </a>
    </>
  );
};

export default Contact;
