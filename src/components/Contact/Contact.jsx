const Contact = ({ contact: { name, phone, id }, removeContact }) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
