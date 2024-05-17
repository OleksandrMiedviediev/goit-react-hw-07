import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { contactValue, selectName } from "../../redux/filtersSlice";

export default function ContactList() {

  const contacts = useSelector(contactValue);
  const nameFilter = useSelector(selectName);

  const contactFilter = contacts.filter((item) =>
      item.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
      <>
          <ul>
            {contactFilter.map((contact => (
                <Contact key={contact.id} contacts={contact} />
            )))}
        </ul>
    </>
  )
}

