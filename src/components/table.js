import React from 'react';
// import './table.css';

const Table = ({ employees }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {employees.length ? (
              employees.map(({ login, name, phone, email, dob, picture }) => {
                const birthdate = (dob.date).slice(0,10)
                return (
                  <tr key={login.uuid}>
                    <td>
                      <img src={picture.large}></img>
                    </td>
                    <td>
                      {name.first} {name.last}
                    </td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{birthdate}</td>
                  </tr>
                );
              })
          ) : (
            <h3>No Results to Display</h3>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;