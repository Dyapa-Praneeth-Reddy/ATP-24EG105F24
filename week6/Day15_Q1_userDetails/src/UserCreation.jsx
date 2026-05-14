import { useState } from 'react';
import './UserCreation.css';

const UserCreation = () => {
  // State for the list of users
  const [users, setUsers] = useState([]);
  
  // State for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User'); // Default role

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Create a new user object
    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      role: role
    };

    // Add the new user to our existing list
    setUsers([...users, newUser]);

    // Clear the form fields
    setName('');
    setEmail('');
    setRole('User');
  };

  return (
    <div className="container">
      <h2>Create New User</h2>
      
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="user-form">
        <div className="input-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>
        </div>

        <button type="submit">Add User</button>
      </form>

      <hr />

      {/* Table Section */}
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserCreation;
