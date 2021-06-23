import React from 'react';
import './Table.css';
import ReactDOM from 'react-dom';


export default class Table extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          students: [
             { id: 1, name: 'Riya', age: 21, email: 'riya@email.com' },
             { id: 2, name: 'Meera', age: 19, email: 'meera@email.com' },
             { id: 3, name: 'Sita', age: 16, email: 'sita@email.com' },
             { id: 4, name: 'Apeksha', age: 25, email: 'Apeksha@email.com' }
          ]
       }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.students[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.students.map((student, index) => {
          const { id, name, age, email } = student //destructuring
          return (
             <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <h1 id='title'>Student Data</h1>
             <table id='students'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
 ReactDOM.render(<Table />, document.getElementById('root'));