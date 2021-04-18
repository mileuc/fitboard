import React, { Component } from "react";
import axios from "axios";

const baseUrl = "https://fitboards.herokuapp.com";
    
export default class CreateUser extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: "",
          status: "Please enter a username."
        };
        
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value,
          status: "Please enter a username."
        });
    }
    

    onSubmit(e) {
        e.preventDefault();
        const user = {
          username: this.state.username
        };
    
        console.log(user);

        axios.post(`${baseUrl}/users/add`, user)
        .then(res => console.log(res.data));
    
        this.setState({
            username: "",
            status: "Name submitted!"
        });
    }


    render() {
        return (
          <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
                <p>{this.state.status}</p>
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
}
