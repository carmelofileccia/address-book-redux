import { useSelector, useDispatch } from "react-redux";


import styles from "./index.module.scss";

export default function Contact({ contactData }) {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.contactData}
      onClick={() => dispatch({ type: 'DELETE_CONTACT', payload: contactData.name })}
    >
      <p>
        {contactData.name} {contactData.surname}
      </p>
      <p className={styles.contactPhone}>{contactData.phone}</p>
    </div>
  );
}
