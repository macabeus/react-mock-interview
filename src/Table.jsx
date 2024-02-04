import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
  
        <tbody>
          {
            this.props.entries.map((entry) => {
              return (<tr>
                <th>{entry.name}</th>
                <td>{entry.age}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    )
  }
}

export default Table
