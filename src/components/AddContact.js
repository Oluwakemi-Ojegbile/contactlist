import React, { useState } from "react";
import { connect } from "react-redux";
import { saveContact } from "../action/action";
import Modal from "./Modal";

const AddContact = ({ saveContactItem }) => {
  const [toggle, setToggle] = useState(false);
  const [formInput, setFormInput] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone_no: "",
    errors: {}
  });

  function toggleForm() {
    setToggle(!toggle);
    setFormInput({
      ...formInput,
      firstName: "",
      surname: "",
      email: "",
      phone_no: "",
      errors: {}
    })
  }

  function handleChange(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  }
  function handleValidation(e) {
    const errors = {};
    let isValid = true;
    if (formInput.firstName === "") {
      isValid = false;
      errors.firstName = "*firstName is required";
    }
    if (formInput.surname === "") {
      isValid = false;
      errors.surname = "*surname is required";
    }
    if (formInput.email === "") {
      isValid = false;
      errors.email = "*email is required";
    }
    if (formInput.phone_no === "") {
      isValid = false;
      errors.phone_no = "*phone number is required";
    }
    setFormInput({
      ...formInput,
      errors
    });
    return isValid;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      delete formInput.errors;
      saveContactItem(formInput);
      setFormInput({
        firstName: "",
        surname: "",
        email: "",
        phone_no: "",
        errors: {}
      });
      toggleForm();
    }
  }
  return (
    <div>
      <Modal show={toggle}>
        <form onSubmit={handleSubmit} className="form_wrapper">
          <h2>ADD CONTACT</h2>
          <input
            onChange={handleChange}
            value={formInput.firstName}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <small className="error_msg"> {formInput.errors.firstName} </small>
          <input
            onChange={handleChange}
            value={formInput.surname}
            type="text"
            name="surname"
            placeholder="Surname"
          />
          <small className="error_msg"> {formInput.errors.surname} </small>
          <input
            onChange={handleChange}
            value={formInput.email}
            type="email"
            name="email"
            placeholder="Email"
          />
          <small className="error_msg"> {formInput.errors.email} </small>
          <input
            onChange={handleChange}
            value={formInput.phone_no}
            type="tel"
            name="phone_no"
            placeholder="Phone number"
          />
          <small className="error_msg"> {formInput.errors.phone_no} </small>
          <span className="saveClose_btn">
            <button onClick={handleSubmit}>SAVE</button>
            <button onClick={toggleForm}>CLOSE</button>
          </span>
        </form>
      </Modal>
      <button onClick={toggleForm} className="addContact_btn">
        ADD CONTACT
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  saveContactItem: contact => dispatch(saveContact(contact))
});
export default connect(null, mapDispatchToProps)(AddContact);
