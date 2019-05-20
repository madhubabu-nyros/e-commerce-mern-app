import React, { Component } from 'react';

class ListUsers extends Component {
   render() {

      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.email}</td>
            <td>{this.props.data.phone}</td>
            <td><button>View</button></td>
            <td><button type="button" className="btn8" onClick={() => this.props.removeDoc(this.props.data.phone)}>Delete</button></td>
         </tr>       
      );
   }
}
export default ListUsers;