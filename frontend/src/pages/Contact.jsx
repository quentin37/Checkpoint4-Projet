import React from "react";
import { Helmet } from "react-helmet-async";

import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section>
      <Helmet>
        <title>Portfolio|Contact</title>
      </Helmet>
      <ContactForm />
    </section>
  );
}

export default Contact;
