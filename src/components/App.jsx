import styles from './App.module.css';
import ContactForm from './contact_form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contact_list/ContactList';
import { Section } from './common/section/Section';
import { selectError, selectIsLoading } from './redux/selectors';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { Loader } from './common/loader/Loader';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error && !isLoading) {
      Notify.failure('Error: ' + error);
    }
  }, [isLoading, error]);

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      <div className={styles.phonebook}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <div className={styles.contacts}>
            <Filter />
            <ContactList />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default App;
