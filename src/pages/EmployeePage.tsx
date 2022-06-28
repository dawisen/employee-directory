import React, { useState, useEffect } from 'react';
import Container from '../components/container';
import Row from '../components/row';
import Header from '../components/header';
import getEmployees from '../api/API';
import Searchbar from '../components/searchbar';
import Table from '../components/table';
import { Employee } from '../interfaces/Employee';

function EmployeePage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  async function loadEmployees() {
    try {
      const employeeReturn = await getEmployees();
      setEmployees(employeeReturn);
      setFilteredEmployees(employeeReturn);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadEmployees();
  }, []);
  const handleSearch = (search: string) => {
    const employeeFilter = employees.filter((person) => {
      if (
        person.name.first.toLowerCase().includes(search.toLowerCase())
        || person.name.last.toLowerCase().includes(search.toLowerCase())
      ) {
        return person;
      }
      return null;
    });
    setFilteredEmployees(employeeFilter);
  };

  return (
    <div>
      <Header />
      <Container fluid>
        <Searchbar handleSearch={handleSearch} />
        <Row>
          <div className="table-responsive">
            <Table employees={filteredEmployees} />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default EmployeePage;
