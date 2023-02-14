import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts, deleteContact } from 'redux/operations';
import {
  // deleteContact,
  selectContacts,
  selectError,
  selectLoadingStatus,
} from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import {
  deleteContact,
  getContactsList,
} from 'redux/contacts/contactsOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const ContactList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter).toLowerCase();
  const visibleContacts = () => {
    if (filter.trim().length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return contacts;
  };
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getContactsList());
    }
  }, [dispatch, isLoggedIn]);

  console.log(contacts);
  return (
    <>
      <h2>Contact list</h2>
      <ul>
        {error && <p>{error}</p>}
        {isLoading && <p>Contacts are loading</p>}
        {contacts &&
          visibleContacts().map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}{' '}
              <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
