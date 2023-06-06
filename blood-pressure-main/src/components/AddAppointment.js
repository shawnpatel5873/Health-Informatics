import React from 'react';
import {Navigate, useHistory, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';


class AddAppointment extends React.Component {    
    state = {  
        year:"",
        month:"",
        day:"",
        hour:"",
        mins:"",
        nameOfProvider:"",
        typeOfProvider:""
    };

    isNumber = (str)=> {
        if(str.trim()===''){
            return false;
        }
        return !isNaN(str);
    };
    
    addAppointment = (e) => {
        e.preventDefault();
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        if(!this.isNumber(this.state.year)) {
            alert("Year is not a number");
            return;
        };

        if(!this.isNumber(this.state.month)) {
            alert("Month is not a number");
            return;
        };
        if(!this.isNumber(this.state.day)) {
            alert("Day is not a number");
            return;
        };

        if(!this.isNumber(this.state.hour)) {
            alert("Hour is not a number");
            return;
        };

        if(!this.isNumber(this.state.mins)) {
            alert("Minutes is not a number");
            return;
        };

        if(parseInt(this.state.day)<0||parseInt(this.state.day)>31) {
            alert("Day needs to be between 1 and 31");
            return;
        };

        if(parseInt(this.state.month)<0||parseInt(this.state.month)>12) {
            alert("Day needs to be between 1 and 31");
            return;
        };

        if(parseInt(this.state.time1)<0||parseInt(this.state.hour)>24) {
            alert("Time is military time and needs to be between 0 and 24.");
            return;
        };

        if(parseInt(this.state.time2)<0||parseInt(this.state.mins)>59) {
            alert("Minutes needs to be between 0 and 59");
            return;
        };

        if((parseInt(this.state.year)<parseInt(year)) || (parseInt(this.state.year)<=parseInt(year) && parseInt(this.state.month)<=parseInt(month)&& parseInt(this.state.day)<parseInt(day))) {
            alert("Date must be in the future.");
            return;
        };

        if(this.state.date==="" || this.state.nameOfProvider === "" || this.state.typeOfProvider ===""|| this.state.year==="", this.state.month==="", this.state.day==="",this.state.time1==="",this.state.time2===""){
            alert("All fields are mandatory! Enter 0 if not relevant");
            return;
        }
         
        this.props.addAppointmentHandler(this.state);
        this.setState({year: "", month:"", day:"",hour:"", mins:"",nameOfProvider:"",typeOfProvider:""});
        this.props.history.push("/bplist");
    };
    
    
    
    


    
    render() {
        
        
        return (
            
            <div className="ui main">
                <h2>Add Appointment</h2>
                <form className="ui form" onSubmit={
                    this.addAppointment 
                }>
                    
                    <div className="field">
                        <label>Year</label>
                        <input type="text" 
                        year="year" 
                        placeholder="year"
                        value={this.state.year}
                        onChange={(e) => this.setState({year:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Month(1-12)</label>
                        <input type="text" 
                        month="month" 
                        placeholder="month"
                        value={this.state.month}
                        onChange={(e) => this.setState({month:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Day(1-31)</label>
                        <input type="text" 
                        day="day" 
                        placeholder="day"
                        value={this.state.day}
                        onChange={(e) => this.setState({day:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Hour(0-24 Military Time)</label>
                        <input type="text" 
                        hour="hour" 
                        placeholder="hour"
                        value={this.state.hour}
                        onChange={(e) => this.setState({hour:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Minutes(0-59 Military Time)</label>
                        <input type="text" 
                        mins="mins" 
                        placeholder="mins"
                        value={this.state.mins}
                        onChange={(e) => this.setState({mins:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Provider's Name</label>
                        <input type="text" 
                        nameOfProvider="nameOfProvider" 
                        placeholder="nameOfProvider"
                        value={this.state.nameOfProvider}
                        onChange={(e) => this.setState({nameOfProvider:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Provider Type</label>
                        <input type="text" 
                        typeOfProvider="typeOfProvider" 
                        placeholder="typeOfProvider"
                        value={this.state.typeOfProvider}
                        onChange={(e) => this.setState({typeOfProvider:e.target.value})} 
                        />
                    </div>
                    <button className="ui button blue">
                        Add
                    </button>
                    
                </form>
            </div>

        );
    };

}

export default AddAppointment;