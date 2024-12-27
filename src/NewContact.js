import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewContact.css';

const NewContact = ({ setContacts }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({ name: '', username: '', description: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts(prev => [
      ...prev,
      { ...formData, id: Date.now(), image: 'https://via.placeholder.com/150' }
    ]);
    navigate('/');
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

export default NewContact;