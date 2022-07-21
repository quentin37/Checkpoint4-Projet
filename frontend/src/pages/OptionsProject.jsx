import React from "react";
import EditProject from "../components/EditProject";
import PostProject from "../components/PostProject";

function OptionsProject() {
  return (
    <section className="all_options">
      <PostProject />
      <EditProject />
    </section>
  );
}

export default OptionsProject;
