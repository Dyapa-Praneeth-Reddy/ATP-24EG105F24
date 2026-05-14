import { useState } from 'react'
import Usercount from './components/Usercount'
import Users from './components/Users'
import './index.css'

function App() {
  const [count, setCount] = useState(0);

  const handleAddUser = (user) => {
    // Increment the count when a user is added
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-4 fw-bold text-primary mb-3">User Management</h1>
        <p className="lead text-muted">Browse and add users from the directory</p>
      </header>
      
      <Usercount count={count} />
      
      <main>
        <Users onAddUser={handleAddUser} />
      </main>
    </div>
  )
}

export default App
