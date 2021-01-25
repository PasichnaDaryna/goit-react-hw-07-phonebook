import "../contactList/ContactList.css";
import { useSelector, useDispatch } from "react-redux";
import * as ContactOperations from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  // const contacts = useSelector(getContacts);
  const onDeleteContact = (id) => dispatch(ContactOperations.deleteContact(id));

  return (
    <ul className="contact-list">
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            <b>{name} </b>
            <em>{number}</em>
          </p>
          <button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
