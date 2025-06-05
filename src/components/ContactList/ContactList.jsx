import Contact from "../Contact/Contact";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
