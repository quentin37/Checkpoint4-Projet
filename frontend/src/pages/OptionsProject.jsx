import React from "react";
import { Helmet } from "react-helmet-async";
import DeleteProject from "../components/DeleteProject";
import EditProject from "../components/EditProject";
import PostProject from "../components/PostProject";

function OptionsProject() {
  return (
    <section className="all_options">
      <Helmet>
        <title>Portfolio|Edit project</title>
      </Helmet>
      <PostProject />
      <EditProject />
      <DeleteProject />
    </section>
  );
}

export default OptionsProject;
