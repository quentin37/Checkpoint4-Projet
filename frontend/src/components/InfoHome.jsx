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
          <button type="button" className="enSavoirPlus">
            En savoir plus
          </button>
        </Link>
      </div>
      <div className="contact">
        <h3>Vous voulez me contacter ? </h3>
        <p className="description1">
          Vous avez une question ? <br />
          Vous etes interesse par mon profil ? <br />
          je repondrai a toute vos question.
        </p>
        <Link to="/about_Me">
          <button type="button" className="enSavoirPlus">
            En savoir plus
          </button>
        </Link>
      </div>
    </div>
  );
}

export default InfoHome;
