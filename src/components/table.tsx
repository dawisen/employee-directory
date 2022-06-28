import React, { useState } from 'react';
import { Employee } from '../interfaces/Employee';

interface tableComponentProps {
  employees: Employee[];
}

function Table({ employees }: tableComponentProps) {
  const [listToSort, setListToSort] = useState(employees);
  const [buttonVal, setButtonVal] = useState(0);

  const sortByLastName = () => {
    // if the table is unsorted
    if (buttonVal === 0) {
      setButtonVal(1);
      const sorted = listToSort.sort((a, b) => a.name.last.localeCompare(b.name.last));
      // set the new sorted state of the array
      return setListToSort(sorted);
    } if (buttonVal === 1) {
      setButtonVal(0);
      listToSort.reverse();
    }
    return null;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              value={buttonVal}
              onClick={sortByLastName}
            >
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
          employees.map(({
            login, name, phone, email, dob, picture,
          }) => {
            const birthdate = dob.date.slice(0, 10);
            return (
              <tr key={login.uuid}>
                <td>
                  <img src={picture.large} alt="employee thumbnail" />
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
  );
}

export default Table;
