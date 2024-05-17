import Contact from "../Contact/Contact"
import {selectVisibleContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

export default function ContactList() {

  const contacts = useSelector(selectVisibleContacts);

  return (
      <>
          <ul>
            {contacts.map((contact => (
                <Contact key={contact.id} contact={contact} />
            )))}
        </ul>
    </>
  )
}

