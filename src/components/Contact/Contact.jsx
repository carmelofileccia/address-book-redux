import styles from "./index.module.scss";

export default function Contact({ contactData, deleteContact }) {
  return (
    <div
      className={styles.contactData}
      onClick={() => deleteContact(contactData.phone)}
    >
      <p>
        {contactData.name} {contactData.surname}
      </p>
      <p className={styles.contactPhone}>{contactData.phone}</p>
    </div>
  );
}
