import React, { useEffect, useState } from 'react';
import './index.css';

function UserRecord() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        // Filter the fetched data to include only the specified records
        const filteredUsers = data.users.filter(user => user.id <= 10);
        setUsers(filteredUsers);
      });
  }, []);

  return (
    <div className="user-table-container">
      <h1 className="table-heading">User Records</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Birth Date</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="user-details">
                  <img className="user-avatar" src={user.image} alt={user.username} />
                  <div className="user-name">
                    {user.firstName} {user.lastName}
                  </div>
                </div>
              </td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.birthDate}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>
                <div className="eye-color-dot" style={{ backgroundColor: user.eyeColor }}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRecord;
