import Container from './Container';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setContact, setFilter, setRemoveContact } from 'redux/phonebookSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const formAddContact = contactData => {
    const isExistingContact = contacts.some(contact => contact.name === contactData.name);

    if (isExistingContact) {
      alert('This contact already exists!');
      return;
    }

    dispatch(setContact(contactData));
  };

  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactForm
        formAddContact={formAddContact}
        contactsArr={contacts} />
      
      <h2>Contacts</h2>
      
      <Filter value={filter} handleChangeFilter={handleChangeFilter}/>
      
      <Contacts contact={filterContact} removeContact={contactId => dispatch(setRemoveContact(contactId))}/>

      </Container>       
  );
}