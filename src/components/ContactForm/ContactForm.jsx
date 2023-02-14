import styled from 'styled-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from 'redux/contacts/contactsOperations';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid black;
  padding: 15px;
  gap: 15px;
`;

const ContactForm = () => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    // for (const contact of contacts) {
    //   if (contact.name === form.elements.name.value.trim()) {
    //     alert(
    //       `Контакт с именем ${form.elements.name.value} уже существует. Выберите другое имя`
    //     );
    //     return;
    //   }
    // }

    dispatch(
      createContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <h2>Add new contact</h2>
      <Form name="add_contact_form" onSubmit={e => handleSubmit(e)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};

export default ContactForm;
