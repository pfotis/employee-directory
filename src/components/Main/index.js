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
        let tempData = res.data.results;
        let tempArray = [];
        for (let i=0; i< tempData.length; i++){
          let tempObj ={
            id : (i+1),
            name : `${tempData[i].name.first} ${tempData[i].name.last}`,
            email: tempData[i].email,
            phone: tempData[i].cell,
            city: tempData[i].location.city,
            state: tempData[i].location.state
          };
          tempArray.push(tempObj);
        }
        this.setState({ results: tempArray });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.results);
    return (
      <div>
        <h2>Employee Table</h2>
        <EmployeeCard  employees={this.state.results} />
      </div>
    );
  }
}

export default Main;
