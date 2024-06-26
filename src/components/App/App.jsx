import {useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contactsOps'
import Loader from '../Loader/Loader'
import { selectError, selectLoading } from '../../redux/contactsSlice'
import css from "./App.module.css"

export default function App() {

  const dispatch = useDispatch();
  useEffect(()=>{dispatch(fetchContacts())},[dispatch])

  const isLoading = useSelector(selectLoading)
  const isError = useSelector(selectError)

  




  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox/>
      {isLoading && <Loader/> }
      {isError&& <p>Error!</p>}
      <ContactList/>
    </div>
  )
}
