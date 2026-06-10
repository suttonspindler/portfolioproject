import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="proj-card">
      {props.imgPath && (
        <div className="proj-card-media">
          <img src={props.imgPath} alt={props.title} className="proj-card-img" />
        </div>
      )}
      <div className="proj-card-body">
        <h3 className="proj-card-title">{props.title}</h3>
        <p className="proj-card-description">{props.description}</p>
        <div className="proj-card-actions">
          {props.liveLink && (
            <a className="proj-card-btn proj-card-btn-primary" href={props.liveLink} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp;Visit Site
            </a>
          )}
          {props.ghLink && (
            <a className="proj-card-btn proj-card-btn-primary" href={props.ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp;GitHub
            </a>
          )}
          {props.demoLink && (
            <a className="proj-card-btn proj-card-btn-primary" href={props.demoLink} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp;Demo
            </a>
          )}
          {props.presentationLink && (
            <a
              className="proj-card-btn proj-card-btn-primary"
              href={props.presentationLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> &nbsp;Presentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
