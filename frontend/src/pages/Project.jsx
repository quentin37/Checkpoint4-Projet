import { Helmet } from "react-helmet-async";
import ViewProject from "../components/ViewProject";

function Project() {
  return (
    <section>
      <Helmet>
        <title>Portfolio|Projet</title>
      </Helmet>
      <ViewProject />
    </section>
  );
}

export default Project;
