import React, { useEffect } from 'react';
import './Contact.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './../../redux/contactsSlice';
import { fetchContacts } from './../../redux/contactsSlice';

export const Contact = () => {
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = getVisibleContacts();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong...</div>}
      {filteredContacts.length !== 0 ? (
        <ul>
          {filteredContacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <li key={id} className="contact-item">
                <p className="contact-text">
                  {name}: {number}
                </p>
                <button
                  className="contact-button"
                  type="button"
                  onClick={() => deleteContactHandler(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="heading">No contacts</p>
      )}
    </>
  );
};
