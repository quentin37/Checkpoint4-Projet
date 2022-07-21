import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../css/Projectcard.css";

function ProjectCards() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/allProject `)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="allProject">
      {projects.map((project) => (
        <div className="cardProject" key={project.id}>
          <h3>{project.title}</h3>
          <p className="describe">{project.description}</p>
          <Link to={`/projet/${project.id}`}>
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
