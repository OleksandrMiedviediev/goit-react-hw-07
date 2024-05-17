import Contact from "../Contact/Contact"
import {selectVisibleContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css"

export default function ContactList() {

  const contacts = useSelector(selectVisibleContacts);

  return (
      <>
          <ul className={css.container}>
            {contacts.map((contact => (
                <Contact key={contact.id} contact={contact} />
            )))}
        </ul>
    </>
  )
}

