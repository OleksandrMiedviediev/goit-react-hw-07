import { HiPhone } from "@react-icons/all-files/hi/HiPhone";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";


export default function Contact({contacts:{name, number, id}}) {
  const dispatch = useDispatch();

  return (
      <>
      <li>
        <div className={css.container}>
            <div>
                <p><HiUser/> {name}</p>
                <p><HiPhone /> {number}</p>
            </div>
                <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
        </li>
    </>
  )
}