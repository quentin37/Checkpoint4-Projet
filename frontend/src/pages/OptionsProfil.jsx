import React from "react";
import { Helmet } from "react-helmet-async";
import EditProfil from "../components/EditProfil";

function OptionsProfil() {
  return (
    <section>
      <Helmet>
        <title>Portfolio|Edit Profil</title>
      </Helmet>
      <EditProfil />
    </section>
  );
}

export default OptionsProfil;
