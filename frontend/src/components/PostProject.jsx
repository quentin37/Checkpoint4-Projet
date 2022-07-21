import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

import "../css/ContactForm.css";

export default function PostProject() {
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
      .post(`${import.meta.env.VITE_BACKEND_URL}/postProject`, data)
      .then(() => {
        console.warn("mail was send");
      })
      .catch((err) => console.error(err));
    setSubmitted(true);
    reset();
  };

  return (
    <section>
      <h1>Créer un nouveau projet :</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="field_label_qb" htmlFor="nameInput">
            Titre du projet
            <input
              className="field_input"
              type="text"
              name="nameInput"
              {...register("title", { required: true })}
            />
            {/* Si le champ n'est pas rempli, on indique à l'utilisateur que ce champ est requis. */}
            {errors.Name?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ Le titre est obligatoire !
              </p>
            )}
            <label className="field_label_qb" htmlFor="messageInput">
              Description
              <br />
              <textarea
                className="contact_textaera_qb"
                name="messageInput"
                {...register("description", { required: true })}
              />
              {errors.Message?.type === "required" && (
                <p className="contact_required_qb">
                  ⚠️ La description est obligatoire !
                </p>
              )}
            </label>
          </label>
          <label className="field_label_qb" htmlFor="emailInput">
            Image du projet (URL)
            <input
              className="field_input"
              type="text"
              name="emailInput"
              {...register("image", { required: true })}
            />
            {errors.Email?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ L'image est obligatoire !
              </p>
            )}
          </label>
          <label className="field_label_qb" htmlFor="sujetlInput">
            Repot du projet
            <input
              className="field_input"
              type="text"
              name="sujetlInput"
              {...register("Sujet", { required: true })}
            />
            {errors.Sujet?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ Le sujet est obligatoire !
              </p>
            )}
          </label>
          <label className="field_label_qb" htmlFor="sujetlInput">
            Date du projet
            <input
              className="field_input"
              placeholder="ex : 2022-06-22"
              type="text"
              name="sujetlInput"
              {...register("Sujet", { required: true })}
            />
            {errors.Sujet?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ Le sujet est obligatoire !
              </p>
            )}
          </label>
          <button type="submit" value="send" className="button_form">
            Envoyer
          </button>
        </div>
      </form>
      {submitted && (
        <div className="confirmation_message">
          <h3> Projet posté </h3>
        </div>
      )}
    </section>
  );
}
