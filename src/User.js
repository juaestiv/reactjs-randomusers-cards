import React from "react";
import ReactDOM from "react-dom";

// Component to represent a single User 'Card' (note: this is a class component so can use state)
// Classes used below are from Bulma, see index.html above
class User extends React.Component {
  constructor(props) {
    super(props);

    // Setup the state data
    this.state = {
      likes: 0
    };

    // This binding is necessary to make `this` work in the onclick callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler for the button
  handleClick() {
    // Increment the likes property stored in state
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  }

  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Profile" src={this.props.image} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.name}</p>
                <p className="subtitle">{this.props.quote}</p>
                <h1>Likes: {this.state.likes}</h1>
                <button type="button" onClick={this.handleClick}>
                  Like this user
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Allow this to be imported by another JS file
export default User;