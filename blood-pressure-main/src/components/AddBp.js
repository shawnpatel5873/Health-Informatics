import React from 'react';
import {Navigate, useHistory, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import bps from '../api/bps';


class AddBp extends React.Component { 
    state = {
        systolic: "",
        diastolic:"",
        exerciseTime:"",
        strengthTime:"",
        caloriesConsumedVeggie:"",
        caloriesConsumedGeneral:""
    };
    
    isNumber = (str)=> {
        if(str.trim()===''){
            return false;
        }
        return !isNaN(str);
    };

    add = (e) => {
        e.preventDefault();

        if(!this.isNumber(this.state.systolic)|| parseInt(this.state.systolic)<0) {
            alert("Systolic is not a number");
            return;
        };
        if(!this.isNumber(this.state.diastolic) || parseInt(this.state.diastolic)<0) {
            alert("Diastolic is not a number");
            return;
        };

        if(!this.isNumber(this.state.exerciseTime) || parseInt(this.state.exerciseTime)<0) {
            alert("Exercise Time Cardio is not a number");
            return;
        };

        if(!this.isNumber(this.state.strengthTime) || parseInt(this.state.strengthTime)<0) {
            alert("Exercise Time Strength Training is not a number");
            return;
        };

        if(!this.isNumber(this.state.caloriesConsumedVeggie) || parseInt(this.state.caloriesConsumedVeggie)<0 || parseInt(this.state.caloriesConsumedVeggie)>parseInt(this.state.caloriesConsumedGeneral)) {
            alert("Calorie Intake Fruits and Veggies is greater than overall intake");
            return;
        };

        if(!this.isNumber(this.state.caloriesConsumedGeneral) || parseInt(this.state.caloriesConsumedGeneral)<0) {
            alert("Calorie Intake-General is not a number");
            return;
        };
        
        if(this.state.date==="" || this.state.systolic === "" || this.state.diastolic ==="" || this.state.exerciseTime===""||this.state.strengthTime===""||this.state.caloriesConsumedVeggie===""||this.state.caloriesConsumedGeneral===""){
            alert("All fields are mandatory! Enter 0 if not relevant");
            return;
        };

        this.props.addBpHandler(this.state);
        this.setState({systolic: "", diastolic:"", exerciseTime:"",strengthTime:"",caloriesConsumedVeggie:"",caloriesConsumedGeneral:""});
        this.props.history.push("/bplist"); 
    };
    render() {
        
        
        return (
            
            <div className="ui main">
                <h2>Add BP</h2>
                <form className="ui form" onSubmit={
                    this.add
                }>
                    
                    <div className="field">
                        <label>Systolic</label>
                        <input type="text" 
                        systolic="systolic" 
                        placeholder="systolic"
                        value={this.state.systolic}
                        onChange={(e) => this.setState({systolic:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Diastolic</label>
                        <input type="text" 
                        diastolic="diastolic" 
                        placeholder="diastolic"
                        value={this.state.diastolic}
                        onChange={(e) => this.setState({diastolic:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Excercise Time Cardio(in mins)</label>
                        <input type="text" 
                        exerciseTime="exerciseTime" 
                        placeholder="exerciseTime"
                        value={this.state.exerciseTime}
                        onChange={(e) => this.setState({exerciseTime:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Excercise Time Strength Training(in mins)</label>
                        <input type="text" 
                        strengthTime="strengthTime" 
                        placeholder="strengthTime"
                        value={this.state.strengthTime}
                        onChange={(e) => this.setState({strengthTime:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Calorie Intake Fruits and Veggies(since morning)</label>
                        <input type="text" 
                        caloriesConsumedVeggie="caloriesConsumedVeggie" 
                        placeholder="caloriesConsumedVeggie"
                        value={this.state.caloriesConsumedVeggie}
                        onChange={(e) => this.setState({caloriesConsumedVeggie:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Calorie Intake-General(since morning)</label>
                        <input type="text" 
                        caloriesConsumedGeneral="caloriesConsumedGeneral" 
                        placeholder="caloriesConsumedGeneral"
                        value={this.state.caloriesConsumedGeneral}
                        onChange={(e) => this.setState({caloriesConsumedGeneral:e.target.value})} 
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

export default AddBp;