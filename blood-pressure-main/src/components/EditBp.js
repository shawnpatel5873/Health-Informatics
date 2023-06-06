import React from 'react';


class EditBP extends React.Component {
    constructor(props) {
        super(props)
        const {id, clientId, date, systolic, diastolic, exerciseTime, strengthTime, caloriesConsumedVeggie, caloriesConsumedGeneral} = props.location.state.bp;
        this.state = {
            id:id,
            clientId:clientId,
            date:date,
            systolic:systolic,
            diastolic:diastolic,
            exerciseTime:exerciseTime,
            strengthTime:strengthTime,
            caloriesConsumedVeggie:caloriesConsumedVeggie,
            caloriesConsumedGeneral:caloriesConsumedGeneral
        }
    }

    isNumber = (str)=> {
        if(str.trim()===''){
            return false;
        }
        return !isNaN(str);
    };
    

    update = (e) => {
        e.preventDefault();
        
        if(!this.isNumber(this.state.systolic) || parseInt(this.state.systolic)<0) {
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

        if(!this.isNumber(this.state.caloriesConsumedVeggie) || parseInt(this.state.caloriesConsumedVeggie)<0) {
            alert("Calorie Intake Fruits and Veggies is not a number");
            return;
        };

        if(!this.isNumber(this.state.caloriesConsumedGeneral) || parseInt(this.state.caloriesConsumedGeneral)<0) {
            alert("Calorie Intake-General is not a number");
            return;
        };

        if(parseInt(this.state.caloriesConsumedGeneral) < parseInt(this.state.caloriesConsumedVeggie)) {
            alert("Calorie Intake Fruits and Veggies must be less than the general calorie intake");
            return;
        };
        
        if(this.state.date==="" || this.state.systolic === "" || this.state.diastolic ==="" || this.state.exerciseTime===""||this.state.strengthTime===""||this.state.caloriesConsumedVeggie===""||this.state.caloriesConsumedGeneral===""){
            alert("All fields are mandatory! Enter 0 if not relevant");
            return;
        }
        
        this.props.updateBpHandler(this.state); 
        this.setState({systolic: "", diastolic:"", exerciseTime:"",strengthTime:"",caloriesConsumedVeggie:"",caloriesConsumedGeneral:""});
        this.props.history.push("/bplist");
    };
    render() {  
        return (
            <div className="ui main">
                <h2>Edit BP</h2>
                <form className="ui form" onSubmit={this.update}>
                    
                    <div className="field">
                        <label>Systolic</label>
                        <input type="text" 
                        systolic="systolic" 
                        placeholder="Systolic"
                        value={this.state.systolic}
                        onChange={(e) => this.setState({systolic:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Diastolic</label>
                        <input type="text" 
                        diastolic="diastolic" 
                        placeholder="Diastolic"
                        value={this.state.diastolic}
                        onChange={(e) => this.setState({diastolic:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Excercise Time Cardio(in hours)</label>
                        <input type="text" 
                        exerciseTime="exerciseTime" 
                        placeholder="ExerciseTime"
                        value={this.state.exerciseTime}
                        onChange={(e) => this.setState({exerciseTime:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Excercise Time Strength Training(in hours)</label>
                        <input type="text" 
                        strengthTime="strengthTime" 
                        placeholder="StrengthTime"
                        value={this.state.strengthTime}
                        onChange={(e) => this.setState({strengthTime:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Calorie Intake Fruits and Veggies(since morning)</label>
                        <input type="text" 
                        caloriesConsumedVeggie="caloriesConsumedVeggie" 
                        placeholder="CaloriesConsumedVeggie"
                        value={this.state.caloriesConsumedVeggie}
                        onChange={(e) => this.setState({caloriesConsumedVeggie:e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label>Calorie Intake-General(since morning)</label>
                        <input type="text" 
                        caloriesConsumedGeneral="caloriesConsumedGeneral" 
                        placeholder="CaloriesConsumedGeneral"
                        value={this.state.caloriesConsumedGeneral}
                        onChange={(e) => this.setState({caloriesConsumedGeneral:e.target.value})} 
                        />
                    </div>
                    <button className="ui button blue">
                        Update
                    </button>
                </form>
            </div>
        );
    };
}

export default EditBP;