import { useState, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import contactsList from '../../../contacts.json'

export default function App() {


  
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(()=>{
    return savedContacts ? savedContacts : contactsList;
   });
  const [search, setSearch] = useState('');


  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))
  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  const deleteContact = (id) => {
    setContacts(prevContact => {
      return prevContact.filter((el) => el.id !==id)
    })
  }
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm newContact={addContact} />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={ deleteContact} />
    </>
  )
}
