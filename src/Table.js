import React from 'react'

function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
}

function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
            <td>{row.name}</td>         
            <td>{row.job}</td>
            </tr>
            );
        }
    );
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

function Table(props) {
    return (
        <table>
            <TableHeader />
            <TableBody characterData={props.characterData} /> 
        </table>
    );
}

export default Table;


/* Naive version of the Table
function Table() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    );  
}
*/
