import React,{Component} from 'react';
import '../components/ChartStyling.css'
//Taking input for x-axis and y-axis from the user
class InputData extends Component {
    render() {
      return (
        <div id="formSection">
          <h1>Visualize the table Data</h1>  
          <form onSubmit={this.props.handleFormSubmit}>
            <label>
            X-Axis Data:
            <input id="xaxis-input" value={this.props.newinputX} type="text" name="inputX" onChange={this.props.handleInputChange} />
            </label> <br/>
            <label>
            Y-Axis Data:
            <input id="yaxis-input" value={this.props.newinputY} type="number" name="inputY" onChange={this.props.handleInputChange} />
            </label>
            <button type="submit" value="Submit">ADD DATA</button>
          </form>
        </div>
      );
    }
  }

  export default InputData;