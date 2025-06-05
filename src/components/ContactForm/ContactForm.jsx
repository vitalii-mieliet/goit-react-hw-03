import { Field, Form, Formik } from "formik";
import { useId } from "react";

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (contact, actions) => {
    addContact(contact);
    console.log(contact);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field name="name" type="text" id={nameId} />
        <label htmlFor={phoneId}>Number</label>
        <Field name="number" type="phone" id={phoneId} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
