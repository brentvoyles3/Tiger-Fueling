import React, { Component } from 'react'
import "../styles/ContactUs.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { withRouter } from '../withRouter';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {name, email, message } = this.state;
    console.log("Name:", name, "Email:", email, "Message:", message);
    fetch("http://localhost:5000/contactus", {
  method:"POST",
  crossDomain:true,
  headers:{
    "Content-Type": "application/json",
    Accept:"application/json",
    "Access-Control-Allow-Origin":"*",
  },
  body:JSON.stringify ({
    name,
    email,
    message,
  }),
}).then((res) => res.json())
.then((data) => {
  console.log(data, "userMessage");
  alert("Message sent, we will reply as soon as possible");
  this.props.navigate('/');
});
  }

render() {
    return (
      <div className="body">
        <h2>Contact The Team</h2>
      <div className="contactContainer"> 
      <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Send Us An Email</h2>
          <div className="form-group">
            <input className="form-control" 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={e => this.setState({name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input className="form-control" 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={e => this.setState({email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="14" name="message" placeholder="Message"
            onChange={e => this.setState({message: e.target.value})}>
            </textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default withRouter(ContactUs);
 