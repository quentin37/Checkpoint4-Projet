import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";

import "../css/ContactForm.css";

export default function ContactForm() {
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
      .post(`${import.meta.env.VITE_BACKEND_URL}/sendEmail`, data)
      .then(() => {
        console.warn("mail was send");
      })
      .catch((err) => console.error(err));
    setSubmitted(true);
    reset();
  };

  return (
    <section className="section_form">
      <form className="form_qb" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact_form_qb">
          <label className="field_label_qb" htmlFor="nameInput">
            Name
            <input
              className="field_input"
              type="text"
              name="nameInput"
              {...register("Name", { required: true })}
            />
            {/* Si le champ n'est pas rempli, on indique à l'utilisateur que ce champ est requis. */}
            {errors.Name?.type === "required" && (
              <p className="contact_required_qb">⚠️ Le nom est obligatoire !</p>
            )}
          </label>
          <label className="field_label_qb" htmlFor="emailInput">
            Email
            <input
              className="field_input"
              type="text"
              name="emailInput"
              {...register("Email", { required: true })}
            />
            {errors.Email?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ L'email est obligatoire !
              </p>
            )}
          </label>
          <label className="field_label_qb" htmlFor="sujetlInput">
            Sujet
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
        </div>
        <div className="form_message_qb">
          <label className="field_label_qb" htmlFor="messageInput">
            Message
            <br />
            <textarea
              className="contact_textaera_qb"
              name="messageInput"
              {...register("Message", { required: true })}
            />
            {errors.Message?.type === "required" && (
              <p className="contact_required_qb">
                ⚠️ Le message est obligatoire !
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
          <h3>L'email est envoyé</h3>
        </div>
      )}
    </section>
  );
}
