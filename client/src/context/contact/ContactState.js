import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  REMOVE_ALERT,
  SET_ALERT,
  UPDATE_CONTACT,
  SET_CURRENT,
  DELETE_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  FILTER_CONTACTS
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Zain",
        email: "zain123@gmail.com",
        phone: "123456",
        type: "personal"
      },
      {
        id: 2,
        name: "Ahmed",
        email: "ahmed123@gmail.com",
        phone: "123456",
        type: "personal"
      },
      {
        id: 3,
        name: "Salman",
        email: "Salman123@gmail.com",
        phone: "123456",
        type: "professional"
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const delContact = contact => {
    dispatch({ type: DELETE_CONTACT, payload: contact });
  };

  // Edit Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update an existing Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Search Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        delContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
