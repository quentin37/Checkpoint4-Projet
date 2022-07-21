import React, { useState } from "react";
import axios from "axios";
import "../css/Post.css";

export default function DeleteProject() {
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const [submitted, setSubmitted] = useState(false);
  const [id, setId] = useState("");

  const onSubmit = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/Project/${id}`)
      .then(() => {})
      .catch((err) => console.error(err));
    setSubmitted(true);
  };

  return (
    <section>
      <h1 className="post_title">Suprimer un projet :</h1>
      <form>
        <div>
          <label className="field_label" htmlFor="id">
            Projet a suprimer (id)
            <input
              className="post_input"
              onChange={(e) => setId(e.target.value)}
              type="text"
            />
          </label>
        </div>
        <div className="post_button">
          <button
            onClick={onSubmit}
            type="submit"
            value="send"
            className="button_form"
          >
            Envoyer
          </button>
        </div>
      </form>
      {submitted && (
        <div className="confirmation_message">
          <h3> Projet suprimé </h3>
        </div>
      )}
    </section>
  );
}
