import React from 'react';
import {Link} from 'react-router-dom';
class Login extends React.Component {
    state = {
        username:"",
        password:""
    };

    handleLogin= (e) =>{
        e.preventDefault();

        if(this.state.username==="" || this.state.password === ""){
            alert("All fields are mandatory!");
            return;
        }
        var proc;
        
        this.props.loginHandler(this.state).then(value =>{
            proc = value;
            console.log(proc);
            if(!value){
                alert("username or password not found in system");
                return;
            }
            else{
                this.props.history.push("/bplist");
                
            }
        });
        this.props.getAllBps();
        this.setState({name:"", username:"", email:"",password:""});
    }
    render(){
        return(
            <div className="ui main">
            <h2>Login</h2>
            <form className="ui form" onSubmit={
                this.handleLogin
            }>
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
export default Login;