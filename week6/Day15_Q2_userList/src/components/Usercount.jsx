import React from 'react';

const Usercount = ({ count }) => {
  return (
    <div className="alert alert-primary mb-4 text-center shadow-sm">
      <h4 className="mb-0">
        Total Users Added: <span className="badge bg-primary fs-5">{count}</span>
      </h4>
    </div>
  );
};

export default Usercount;
