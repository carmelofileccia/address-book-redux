import { useSelector } from "react-redux";
import Contact from "../Contact";
import styles from "./index.module.scss";

export default function ContactsList() {
  const listData = useSelector((state) => state.addressBookList);
  const filter = useSelector((state) => state.filter) || "";

  return (
    <div className={styles.ContactsList}>
      {listData &&
        listData
          .filter((elem) => elem.name.toLowerCase().includes(filter.toLowerCase()))
          .map((contact) => (
            <Contact
              contactData={contact}
              key={contact.phone}
            />
          ))}
    </div>
  );
}
