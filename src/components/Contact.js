import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../action/action";
import { Link } from "react-router-dom";

const Contact = ({ contact, deleteContactItem }) => {
  return (
    <>
      <div className="contact_wrapper">
        <span>
          <button
            onClick={() => {
              deleteContactItem(contact.id);
            }}
            className="delete-btn"
          >
            X
          </button>
        </span>

        <div className="name_initials">{contact.firstName[0].toUpperCase()} {contact.surname[0].toUpperCase()}</div>
        <Link
          to={{
            pathname: "/preview",
            state: contact
          }}
        >
          <div className="contact_info">
            <p>
              <b>
                {contact.firstName} {contact.surname}
              </b>
            </p>
            <p>{contact.phone_no}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteContactItem: id => dispatch(deleteContact(id))
});

export default connect(null, mapDispatchToProps)(Contact);
