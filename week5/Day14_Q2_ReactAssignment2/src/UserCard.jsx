import React from 'react';

const UserCard = ({ name, email, image }) => {
  return (
    <div className="user-card">
      <img src={image} alt={name} className="user-image" />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
        <button className="connect-btn">Connect</button>
      </div>
    </div>
  );
};

export default UserCard;
