import React from "react";
import { Link } from "react-router-dom";

function InfoHome() {
  return (
    <div className="infoHome">
      <div className="aboutMe">
        <h3>Qui suis-je ?</h3>
        <p className="description">
          Je m'apelle Quentin Billac j'ai 21 ans, je suis en formation de
          devleppoeur web et web mobile a la WildCodeSchool.
          <br />
          Ce site est mon porfolio totalement responsive créer avec React. Vous
          trouverez tout mes projet dans se site.
        </p>
        <Link to="/about_Me">
          <p className="enSavoirPlus">En savoir plus</p>
        </Link>
      </div>
      <div className="contact">
        <h3>Vous voulez me contacter ? </h3>
        <p className="description">
          Vous avez une question ? Vous etes interesse par mon profil ? je
          repondrai a toute vos question.
        </p>
        <Link to="/Contact">
          <p className="enSavoirPlus">En savoir plus</p>
        </Link>
      </div>
    </div>
  );
}

export default InfoHome;
