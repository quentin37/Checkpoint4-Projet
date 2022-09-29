import { Helmet } from "react-helmet-async";
import ProjectCards from "../components/ProjectCards";

function AllProject() {
  return (
    <section>
      <Helmet>
        <title>Portfolio|Mes Projets</title>
      </Helmet>
      <ProjectCards />
    </section>
  );
}

export default AllProject;
