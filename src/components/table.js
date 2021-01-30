import React from 'react';
// import './table.css';

const Table = ({ employees }) => {
//   const toggleSort = () => {
//   const employee = {employees}
//   return employee.sort((a, b) => a.name.last.localeCompare(b.name.last));
//  };
// onClick={() => toggleSort()}

  console.log(employees);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              <button type="button">
                Name
              </button>
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {employees.length ? (
            employees.map(({ login, name, phone, email, dob, picture }) => {
              const birthdate = dob.date.slice(0, 10);
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
            <tr>
              <td>No Results to Display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;