import React, { Component } from 'react';
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
    console.log('this.dataCache: ', this.dataCache);
    return (
      <div>
        { this.state.isUsersDownloaded
          ? "тут нормально отрендендерить компоненты"
          : "Данные загружаются"
        }
      </div>
    );
  }
}

export default App;
