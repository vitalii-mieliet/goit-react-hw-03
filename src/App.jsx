import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import inittialContacts from "./data/initial-contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const handleContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  console.log(contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleContacts} />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
