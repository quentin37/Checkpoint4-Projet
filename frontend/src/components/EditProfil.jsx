import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

import "../css/Post.css";

export default function EditProfil() {
  /**
   * register permet d'enregistrer les informations de notre formulaire grâce au code :
   * {...register("Nom-de-variable", { required: true })} dans les input ligne 85/97/108/120
   * { required: true } Permet d'obliger l'utilisateur à rentrer une valeur dans l'input
   */
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/Profil`, data)
      .then(() => {})
      .catch((err) => console.error(err));
    setSubmitted(true);
    reset();
  };

  return (
    <section>
      <h1 className="post_title">Modifier le profil :</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="field_label" htmlFor="idlInput">
            Modifier le profil (id)
            <input
              className="post_input"
              placeholder="default = 1"
              type="text"
              name="id"
              {...register("id", { required: true })}
            />
            {errors.id?.type === "required" && (
              <p className="contact_required_qb">⚠️ L'id est obligatoire !</p>
            )}
          </label>
          <label className="field_label" htmlFor="imageInput">
            Modifier l'image du profil (URL)
            <input
              className="post_input"
              type="text"
              name="imageInput"
              {...register("image", { required: false })}
            />
          </label>
          <label className="field_label" htmlFor="descriptionInput">
            Modifier la description
            <br />
            <textarea
              className="contact_textaera_qb"
              name="descriptionInput"
              {...register("description", { required: false })}
            />
          </label>
          <label className="field_label" htmlFor="parcoursInput">
            Modifier le parcours
            <br />
            <textarea
              className="contact_textaera_qb"
              name="parcoursInput"
              {...register("parcours", { required: false })}
            />
          </label>
          <label className="field_label" htmlFor="objectifInput">
            Modifier l'objectif
            <br />
            <textarea
              className="contact_textaera_qb"
              name="objectifInput"
              {...register("objectif", { required: false })}
            />
          </label>
          <div className="post_button">
            <button type="submit" value="send" className="button_form">
              Envoyer
            </button>
          </div>
        </div>
      </form>
      {submitted && (
        <div className="confirmation_message">
          <h3> Profil modifié </h3>
        </div>
      )}
    </section>
  );
}
