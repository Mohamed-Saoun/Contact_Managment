import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewContact.css';

const EditContact = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find(c => c.id === parseInt(id));
  const [formData, setFormData] = React.useState(contact || { name: '', username: '', description: '', image: '' });

  if (!contact) return <div>Contact not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts(prev => prev.map(c => c.id === contact.id ? formData : c));
    navigate(`/contacts/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="new-contact-form">
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
      <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditContact;