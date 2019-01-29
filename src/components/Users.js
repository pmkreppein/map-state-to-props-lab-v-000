import React, { Component } from 'react';

class Users extends Component {
    const users = this.props.users.map((user, i) => <li key={i}>{user.userName}</li>)

  render() {
    return (
      <div>
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

export default Users
