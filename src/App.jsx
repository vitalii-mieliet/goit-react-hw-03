import { useState } from "react";
import { nanoid } from "nanoid/non-secure";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initContacts from "./data/initContacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(initContacts);

  const addContact = (newContact) => {
    const contact = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const removeContactById = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} removeContact={removeContactById} />
    </div>
  );
}
export default App;
