import React, { useState, useEffect } from "react";
import Container from "../components/container";
import Row from "../components/row";
import Header from "../components/header";
import getEmployees from "../api/API";
import Searchbar from "../components/searchbar";
import Table from "../components/table"

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const employees = await getEmployees();
      // console.log("employees.data.results: ", employees.data.results);
      setEmployees(employees.data.results);
      setFilteredEmployees(employees.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (search) => {
    // console.log("you searched: ", search);
    const employeeFilter = employees.filter((person) => {
      if (
        person.name.first.toLowerCase().includes(search.toLowerCase()) ||
        person.name.last.toLowerCase().includes(search.toLowerCase())
      ) {
        return person;
      }
    });
    // console.log('FILTERED ARRAY AFTER SEARCH', employeeFilter);
    setFilteredEmployees(employeeFilter);
  }

  return (
    <div>
      <Header />
      <Container fluid="true">
        <Searchbar handleSearch={handleSearch}/>
        <Row>
          <div class='table-responsive'>
          <Table employees={filteredEmployees} />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default EmployeePage;
