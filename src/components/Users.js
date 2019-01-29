import React, { Component } from 'react';

class Users extends Component {
    const users = this.props.users.map((user, i) => <li key={i}>{user.userName}</li>)

  render() {
    return (
      <div>
        <ul>
        {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser:state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users)
export default Users
