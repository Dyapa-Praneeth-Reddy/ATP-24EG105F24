import React, { useState, useEffect } from 'react';

const Users = ({ onAddUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center my-5"><div className="spinner-border text-primary" role="status"></div></div>;
  }

  return (
    <div className="row">
      {users.map(user => (
        <div className="col-12 col-md-3 mb-4" key={user.id}>
          <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-primary fw-bold">{user.name}</h5>
              <h6 className="card-subtitle mb-3 text-muted">@{user.username}</h6>
              <div className="card-text flex-grow-1">
                <p className="mb-1"><i className="bi bi-envelope me-2"></i>{user.email}</p>
                <p className="mb-1"><i className="bi bi-building me-2"></i>{user.company.name}</p>
              </div>
              <button 
                className="btn btn-outline-primary mt-3 w-100 fw-bold" 
                onClick={() => onAddUser(user)}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
