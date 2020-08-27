import React from "react";
import Contact from "./Contact";
import AddContact from "../components/AddContact";
import { connect } from "react-redux";


const Contacts = ({ contacts }) => {
  const contactList = contacts.map(contact => {
    return <Contact contact={contact} />;
  }) 
  return (
    <div className="main_wrapper">
      <div>
        <div className="title">
          <h3>CONTACT LIST</h3>
        </div>
        <div className="con_list">{contactList}</div>
      </div>
      <AddContact />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

export default connect(mapStateToProps)(Contacts);
