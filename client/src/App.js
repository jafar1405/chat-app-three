import React from 'react';
import Login from './Login';
import MessagingPanel from './MessagingPanel'

class App extends React.Component{

  state = {
    username:null
  }

  handleLogin = (username) => {
    this.setState({
      username:username
    })
  }

  render(){
    return (
      <>
        {
          !this.state.username?
            <Login handleLogin={this.handleLogin}/>
            :
            <MessagingPanel username={this.state.username}/>
        }
      </>
    );
  }
}

export default App;
