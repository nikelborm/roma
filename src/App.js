import React, { Component } from 'react';
import User from "./components/User";
class App extends Component {
  state = {
    isUsersDownloaded : false,
    users : []
  }
  componentDidMount = async () => {
    const response = await fetch(document.location.origin + "/users.json", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    const users = await response.json();
    console.log('users: ', users);

    this.setState( {
      isUsersDownloaded : true,
      users
    } );
  }
  render() {
    return (
      <div>
        { this.state.isUsersDownloaded
          ? ( this.state.users.length
            ? this.state.users.map( userInfo => (
              <User
                key={ userInfo.id }
                { ...userInfo }
              />
            ))
            : "Нет ни одного пользователя"
          )
          : "Данные загружаются"
        }
      </div>
    );
  }
}

export default App;
