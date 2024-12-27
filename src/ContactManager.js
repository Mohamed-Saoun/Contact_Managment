

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ContactDetails from './ContactDetails';
import NewContact from './NewContact';
import EditContact from './EditContact';
import './ContactManager.css';

const ContactManager = () => {
  const [contacts, setContacts] = React.useState(initialContacts);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-manager">
      <aside className="sidebar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <Link to="/new" className="new-button">New</Link>
        <ul className="contact-list">
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Link to={`/contacts/${contact.id}`} className="contact-item">
                {contact.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="details">
        <Routes>
          <Route path="/" element={<div>Select a contact to view details</div>} />
          <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} setContacts={setContacts} />} />
          <Route path="/new" element={<NewContact setContacts={setContacts} />} />
          <Route path="/edit/:id" element={<EditContact contacts={contacts} setContacts={setContacts} />} />
        </Routes>
      </main>
    </div>
  );
};

const initialContacts = [
    {
      id: 1,
      name: "Simo",
      username: "dennisb",
      description: "Software Engineer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77yAV1N0uaCSwU07-o-qRgHXY8A-_QCi47w&s",
    },
    {
      id: 2,
      name: "Greg Brimble",
      username: "gregb",
      description: "Web Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarSTwJNrQo1xRjEY8s_9dm2tuggMZOsumcA&s",
    },
    {
      id: 3,
      name: "Henri Helvetica",
      username: "henrih",
      description: "How To WebPageTest",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mkyNuXU8457S5Y22pxfqZHLVaPUdjT-8-g&s",
    },
    {
      id: 3,
      name: "Martin mariya",
      username: "henrih",
      description: "How To WebPageTest",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q2CT4LnMFCJLvr2WxNfp-FHUq6Z2n_o9Uw&s",
    },
    {
      id: 3,
      name: "Katalina",
      username: "henrih",
      description: "How To WebPageTest",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQIreRHdz8r48usJjP0oJaCTEcr0uQqYeXg&s",
    },
  ];

export default ContactManager;
