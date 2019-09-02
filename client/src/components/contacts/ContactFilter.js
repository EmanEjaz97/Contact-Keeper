import React, { useContext, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContext;

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
      text.current.value = "";
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Search Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
