import React, { Component } from 'react';

class FakeUserList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentWillMount () {
    fetch('/api/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render () {
    const users = this.state.users.map(user => {
      return (
        <li className="fake-user" key={ user.userId }>
          { user.firstName } - { user.lastName }
        </li>
      );
    });

    return (
      <ul className="fake-user-list">
        { users }
      </ul>
    );
  }
}

FakeUserList.displayName = 'FakeUserList';

export default FakeUserList;
