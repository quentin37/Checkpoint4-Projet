import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

import "../css/Post.css";

export default function EditProject() {
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
      .put(`${import.meta.env.VITE_BACKEND_URL}/postProject`, data)
      .then(() => {})
      .catch((err) => console.error(err));
    setSubmitted(true);
    reset();
  };

  return (
    <section>
      <h1 className="post_title">Modifier un projet :</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="field_label" htmlFor="idlInput">
            Projet a modifer (id)
            <input
              className="post_input"
              type="text"
              name="id"
              {...register("id", { required: true })}
            />
            {errors.id?.type === "required" && (
              <p className="contact_required_qb">⚠️ L'id est obligatoire !</p>
            )}
          </label>
          <label className="field_label" htmlFor="titreInput">
            Modifier le titre du projet
            <input
              className="post_input"
              type="text"
              name="titreInput"
              {...register("title", { required: true })}
            />
            {/* Si le champ n'est pas rempli, on indique à l'utilisateur que ce champ est requis. */}
            {errors.title?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ Le titre est obligatoire !
              </p>
            )}
            <label className="field_label" htmlFor="descriptionInput">
              Modifier la description
              <br />
              <textarea
                className="contact_textaera_qb"
                name="descriptionInput"
                {...register("description", { required: true })}
              />
              {errors.description?.type === "required" && (
                <p className="contact_required_qb">
                  ⚠️ La description est obligatoire !
                </p>
              )}
            </label>
          </label>
          <label className="field_label" htmlFor="imageInput">
            Modifier l'image du projet (URL)
            <input
              className="post_input"
              type="text"
              name="imageInput"
              {...register("image", { required: true })}
            />
            {errors.image?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ L'image est obligatoire !
              </p>
            )}
          </label>
          <label className="field_label" htmlFor="repotlInput">
            Modifier le repot du projet (URL)
            <input
              className="post_input"
              type="text"
              name="repot"
              {...register("repot", { required: true })}
            />
            {errors.repot?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ Le repot est obligatoire !
              </p>
            )}
          </label>
          <label className="field_label" htmlFor="datelInput">
            Modifier la date du projet
            <input
              className="post_input"
              placeholder="ex : 2022-06-22"
              type="text"
              name="datelInput"
              {...register("date", { required: true })}
            />
            {errors.date?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ La date est obligatoire !
              </p>
            )}
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
          <h3> Projet modifié </h3>
        </div>
      )}
    </section>
  );
}
