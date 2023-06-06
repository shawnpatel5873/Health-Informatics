import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component { 
    state = {
        name: "",
        username:"",
        email: "",
        password:""
    };

    handleRegister=(e)=> {
        e.preventDefault();
        
        if(this.state.name==="" || this.state.username === "" || this.state.email ==="" || this.state.password===""){
            alert("All fields are mandatory!");
            return;
        }

        this.props.addUser(this.state).then(value =>{
            if(!value){
                alert("username or email already exist.Please try again.");
                return;
            }
            else{
                this.props.history.push("/bplist");
                
            }
        });
        if(!this.props.addUser(this.state)){
            alert("username or email already exist in system");
            return;
        }
        this.props.getAllBps();
        this.setState({name:"", username:"", email:"",password:""});      
    }
    render(){
        return(
            <div className="ui main">
            <h2>Register</h2>
            <form className="ui form" onSubmit={
                this.handleRegister
            }>
                <div className="field">
                    <label>Name</label>
                    <input type="text" 
                    name="name" 
                    placeholder="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({name:e.target.value})} 
                    />
                </div>
                <div className="field">
                    <label>Username</label>
                    <input type="text" 
                    username="username" 
                    placeholder="username"
                    value={this.state.username}
                    onChange={(e) => this.setState({username:e.target.value})} 
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                    email="email" 
                    placeholder="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({email:e.target.value})} 
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" 
                    password="password" 
                    placeholder="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password:e.target.value})} 
                    />
                </div>
                <button className="ui button blue">
                    Submit
                </button>
            </form>
        </div>
        );
    };

}
export default Register;