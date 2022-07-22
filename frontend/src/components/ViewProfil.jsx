import React, { useState, useEffect } from "react";
import axios from "axios";

import "../css/ViewProfil.css";

function ViewProfil() {
  const [profil, setProfil] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profil`)
      .then((res) => {
        setProfil(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div className="containerImg">
        <img className="profilImg" src={profil.image} alt="" />
        <p className="describeProfil">{profil.description}</p>
      </div>
      <div>
        <p className="describeProfil">{profil.parcours}</p>
      </div>
      <div>
        <p className="describeProfil">{profil.objectif}</p>
      </div>
    </div>
  );
}

export default ViewProfil;
