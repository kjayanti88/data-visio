import React,{Component} from 'react';

class TableCreation extends Component {
    render() {
      const rowData = this.props.rowData;
      return (
        <div id="tableSection">
          <table>
            <tbody>
              <tr>
                <th>X-Axis Data</th>
                <th>Y-Axis Data</th>
              </tr>
              {/* Table Creation using x-axis and y-axis data */}
              {rowData.map(row => {
                return (
                  <tr key={row.id}>
                    <td>{row.inputX}</td>
                    <td>{row.inputY}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default TableCreation;