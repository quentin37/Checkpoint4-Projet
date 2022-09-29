import { Helmet } from "react-helmet-async";
import ViewProfil from "../components/ViewProfil";

function AboutMe() {
  return (
    <section>
      <Helmet>
        <title>Portfolio|About Me</title>
      </Helmet>
      <ViewProfil />
    </section>
  );
}

export default AboutMe;
