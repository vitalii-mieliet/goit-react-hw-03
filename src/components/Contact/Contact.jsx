const Contact = ({ contact: { name, number, id } }) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
