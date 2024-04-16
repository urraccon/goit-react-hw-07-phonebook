import styles from './ContactList.module.css';
import { Button } from 'components/common/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'components/redux/selectors';
import { deleteContact, fetchContacts } from 'components/redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contact}>
            <div className={styles.contactContainer}>
              <span className={styles.id}>
                {`${contacts.indexOf(contact) + 1}.`}
                <span className={styles.name}>
                  {`${contact.name}:`}
                  <span className={styles.number}>{contact.phone}</span>
                </span>
              </span>
              <Button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
