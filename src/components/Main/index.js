import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard/index";
import API from "../../utils/API";

class Main extends Component {
  state = {
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

  render() {
    //console.log(this.state.results);
    return (
      <div>
        <h2>Employee Table</h2>
        <EmployeeCard employees={this.state.results} />
      </div>
    );
  }
}

export default Main;
