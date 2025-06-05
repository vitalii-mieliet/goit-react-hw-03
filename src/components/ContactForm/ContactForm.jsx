import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { contactFormValidation } from "../../validation/formValidation";

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (contact, actions) => {
    addContact(contact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidation}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field name="name" type="text" id={nameId} />
        <ErrorMessage name="name" component={"span"} />
        <label htmlFor={phoneId}>Number</label>
        <Field name="phone" type="phone" id={phoneId} />
        <ErrorMessage name="phone" component={"span"} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
