import React from "react";
import DeleteProject from "../components/DeleteProject";
import EditProject from "../components/EditProject";
import PostProject from "../components/PostProject";

function OptionsProject() {
  return (
    <section className="all_options">
      <PostProject />
      <EditProject />
      <DeleteProject />
    </section>
  );
}

export default OptionsProject;
