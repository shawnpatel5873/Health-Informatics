import React from "react";
import BpEntry from "./BpEntry";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import bps from "../api/bps";


const BpList = (props) => {
    var month = "";
    var day = "";
    var year = "";
    var hour = "";
    var mins = "";
    var nameOfProvider = "";
    var total = 0;
    var average = 0;
    var total2 =0;
    var average2 = 0;
    if(props.can.length > 0){
        month = props.can[0].month;
        day = props.can[0].day;
        year = props.can[0].year;
        hour = props.can[0].hour;
        mins = props.can[0].mins;
        nameOfProvider = props.can[0].nameOfProvider;
    };

    const deleteBpHandler = (id) => {
        props.removeBpHandler(id)
    };

    console.log("working BPLIST")
    const logout = () => {
        props.logoutHandler();
        props.history.push("/");

    }

    const addAppointment = () => {
        props.history.push("/addappointment");

    }

    const renderBpList = props.bps.map((bp) => {
        if (props.bps.length>0){
            total += parseFloat(bp.caloriesConsumedGeneral);
            total2 += parseFloat(bp.exerciseTime);
        }
        return (
            <BpEntry 
                bp={bp} 
                clickHander={deleteBpHandler} 
                // key={bp.id}
            />
        );
    });

    if(total > 0){
        average = total/props.bps.length;
    }
    if (total2 > 0){
        average2 = total2/props.bps.length;
    }

    useEffect(() => {
        props.getAllBps();
    }, [props.bps]);
     
    return(
        <div class ="main">
            <h1>Welcome {props.name.name}</h1>
            <h2>Appointment Reminder</h2>
            <div className="reminderApt">Appointment Date:<b>{month}/{day}/{year}</b> </div>
            <div className="reminderApt2">Appointment Time(military)-<b>{hour}:{mins}</b></div>
            <div className="reminderApt3">Provider:<b>{nameOfProvider}</b> </div>
            <h2>Average Calories Consumed Per Meal:{average.toFixed(2)}</h2>
            <h2>Average Cardiovascular Exercise Per Sesssion(minutes):{average2.toFixed(2)}</h2>
            <h2>BP List
            <button onClick={logout} className="ui button blue right floated"> Logout</button>
                <Link to="/add">
                    <button className="ui button blue right floated"> Add Blood Pressure</button>
                </Link>
                
                    
                    <button onClick={addAppointment} className="ui button blue right floated"> Add Appointment</button>
            </h2>
            
            <div className= "ui celled list">{renderBpList} </div>
        </div>
        
    );
    
};    

export default BpList;