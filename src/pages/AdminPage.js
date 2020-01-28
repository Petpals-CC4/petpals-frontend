import React, { Component } from 'react'

import UserListPage from './UserListPage'
import StoreListPage from './StoreListPage'


class AdminPage extends Component {
  state = {
    mode: 'user'
  }

  handleClick = (e) => {
    this.setState((state) => ({
      mode: state.mode === "user" ? "store" : "user"
    }))
  }

  render() {
    // console.log(this.state.mode)
    return (
      <div>
        {this.state.mode === "user" ?
          <UserListPage handleClick={this.handleClick} />
          :
          <StoreListPage handleClick={this.handleClick} />
        }
      </div>
    )
  }
}

export default AdminPage
