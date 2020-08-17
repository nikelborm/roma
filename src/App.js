import React, { Component } from 'react';
import User from "./components/User";
import RequestErrorReport from "./components/RequestErrorReport";
class App extends Component {
  state = {
    isUsersDownloaded : false,
    isError: false,
    users : []
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(document.location.origin + "/users.json", {
        method: "get",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      const users = await response.json();

      this.setState( {
        isUsersDownloaded : true,
        users
      } );
    } catch (error) {
      this.setState( {
        isError: true,
        error
      } );
    }
  }
  render() {
    if ( this.state.isError ) {
      // Если выводит SyntaxError, то это значит, что вместо json файла пришла 404 html страница
      return (
        <RequestErrorReport
          name={ this.state.error.name }
          message={ this.state.error.message }
          path="/users.json"
        />
      );
    }
    if ( !this.state.isUsersDownloaded ) {
      return <div> Данные загружаются </div>;
    }
    if ( this.state.users.length === 0 ) {
      return <div> Нет ни одного пользователя </div>;
    }
    return (
      <div>
        { this.state.users.map(
          userInfo => (
            <User
              key={ userInfo.id }
              { ...userInfo }
            />
          )
        ) }
      </div>
    );
  }
}

export default App;
