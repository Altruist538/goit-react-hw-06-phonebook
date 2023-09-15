import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle, Section } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(contactsLocalStorage);
  let contacts = useSelector(state => state.contacts);
  // let filter = useSelector(state => state.filter);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const changeNameFilter = newName => {
  //   setFilter(newName);
  // };

  // const handleDelete = quizId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(quiz => quiz.id !== quizId)
  //   );
  // };

  // const addQuiz = newContacts => {
  //   const isContactExists = contacts.find(
  //     contact =>
  //       contact.name.toLowerCase() === newContacts.name.toLowerCase() ||
  //       contact.number === newContacts.number
  //   );
  //   if (isContactExists) {
  //     return alert(`${newContacts.name} is already in contacts`);
  //   }
  //   setContacts(prevContacts => [...prevContacts, newContacts]);
  // };

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
      <GlobalStyle />
    </>
  );
}
