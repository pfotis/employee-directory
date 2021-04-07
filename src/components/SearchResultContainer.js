import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => {
        this.setState({ results: res.data.results });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    console.log(this.state.results);
    return (
      <div>
        <h1>employees</h1>
        {
          this.state.results.map(employee => {
            return (<EmployeeCard first={employee.name.first} />);
          })}
      </div>
    );
  }
}

export default SearchResultContainer;