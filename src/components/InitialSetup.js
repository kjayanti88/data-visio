import React, { Component } from "react";
import InputData from "./InputData";
import TableCreation from "./TableCreation";
import BarChart from "./BarChart";

class InitialSetup extends Component {
  constructor() {
    super();

    this.state = {
      inputX: "",
      inputY: "",
      rowData: [],
    };
  }
//Handling the form input: If the input is empty then give error message
//If the data is valid then push that data to array which will be used for row creation
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputX === "" || this.state.inputY === "") {
      alert("Field cannot be empty");
    } else {
      let rowData = [...this.state.rowData];
      rowData.push({ inputX: this.state.inputX, inputY: this.state.inputY, id: Math.floor(Math.random() * 100)});
      this.setState({
        rowData,
        inputX: "",
        inputY: "",
      });
    }
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="input-table">
        <div>
          <InputData
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            newinputX={this.state.inputX}
            newinputY={this.state.inputY}
          />
        </div>
        <div className="tableData">
          <TableCreation rowData={this.state.rowData} />
        </div>
        <div>
          <BarChart data={this.state.rowData} />
        </div>
      </div>
    );
  }
}
export default InitialSetup;
