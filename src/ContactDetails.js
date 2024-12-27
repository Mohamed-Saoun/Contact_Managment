import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ContactDetails.css';

const ContactDetails = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find(c => c.id === parseInt(id));

  const deleteContact = () => {
    setContacts(prev => prev.filter(c => c.id !== parseInt(id)));
    navigate('/');
  };

  if (!contact) return <div>Contact not found</div>;

  return (
    <div className="contact-details">
      <img src={contact.image} alt={contact.name} className="profile-pic" />
      <h2>{contact.name}</h2>
      <p>{contact.username}</p>
      <p>{contact.description}</p>
      <button onClick={() => navigate(`/edit/${id}`)} className="edit-button">Edit</button>
      <button onClick={deleteContact} className="delete-button">Delete</button>
    </div>
  );
};

export default ContactDetails;
