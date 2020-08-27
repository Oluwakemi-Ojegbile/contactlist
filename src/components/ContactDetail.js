import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactDetail = () => {
    const location = useLocation();
    let contact = location.state; 
    return(
        <div className="main_wrapper">   
            <h3 className="title">CONTACT DETAILS</h3>        
            <p>First Name: {contact.firstName} </p>
            <p>Surname: {contact.surname}</p>
            <p>Email: {contact.email}</p>
            <p>Phone No.: {contact.phone_no}</p>   
            <button>EDIT</button>
            <Link to="/"><button style={{background:"#fffafa"}}>&#8592;</button></Link>                    
        </div>
    )
        
}

export default ContactDetail;
