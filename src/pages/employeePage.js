import React, { useState, useEffect } from "react";
import Container from "../components/container";
import Col from "../components/col";
import Row from "../components/row";
import Header from "../components/header";
import getEmployees from "../api/API";
import Searchbar from "../components/searchbar"
import Table from "../components/table"

function Employees() {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
      loadEmployees();
  }, []);

    async function loadEmployees() {
      try {
        const employees = await getEmployees();
        console.log("employees.data.results: ", employees.data.results);
        setEmployees(employees.data.results);
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
    <Header />
      <Container fluid="true">
      <Searchbar />
      <Row>
        {/* <Col size="md-6 sm-12">
          {employees.length ? (
            <List>
              {employees.map(({login, name}) => {
                // const {name, phone, email, dob, picture, login } = person
                return (
                  <ListItem key={login.uuid}>
                    <p>{name.first} {name.last}</p>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col> */}
          <Table employees={employees}/>
      </Row>
      </Container>
    </div>
  );
}

export default Employees;