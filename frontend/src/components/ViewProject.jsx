import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../css/ViewProject.css";

function ViewProject() {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/project/${id} `)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="centerProject">
      <div className="singleProjet">
        <h3>{projects.title}</h3>
        <p className="describeProject">{projects.description}</p>
        <img className="img-responsive" src={projects.image} alt="" />
        <p className="describeProject">
          Ce projet a etait realisé a partir du {projects.date}
        </p>
        <p className="describeProject">
          Vous pouvez retrouver le code sur github : <br />{" "}
          <a href={projects.repot}> {projects.repot} </a>
        </p>
      </div>
    </div>
  );
}

export default ViewProject;
