import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";
import InfoHome from "../components/InfoHome";

import "../css/InfoHome.css";

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Portfolio|Acceuil</title>
      </Helmet>
      <Slider />
      <InfoHome />
    </section>
  );
}
