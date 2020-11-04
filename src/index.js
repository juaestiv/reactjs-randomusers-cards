import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
// Note: ensure you've installed axios with 'npm install axios'
import axios from "axios";

// 'Outer' component that will contain all the User 'cards'
class UserGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data for 50 users
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(response => {
        // GET request was successful, store the users in state
        this.setState({ users: response.data.results });
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }

  render() {
    const userList = this.state.users.map(u => (
      <User
        key={u.name.first}
        name={u.name.first}
        image={u.picture.medium}
        quote={u.quote}
      />
    ));

    return <div className="columns is-multiline">{userList}</div>;
  }
}

ReactDOM.render(<UserGrid />, document.getElementById("root"));