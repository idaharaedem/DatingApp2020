import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/users')
    .then(userData => {
      this.setState({users: userData.data})
      console.log(this.state.users);
    })
    .catch(err => {
      console.log(err)
    })
      
  }
  
  render(){
    const {users} = this.state;
    return (
      <div className="App">
        <h1> Dating App </h1>
          <div className="listUsers">
            {users.map(item => 
              <li key={item.id}> {item.userName} </li>)}
          </div>
      </div>
      
    );
  }
}
export default App;
