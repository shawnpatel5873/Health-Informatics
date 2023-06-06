import React from "react";

import {Link} from "react-router-dom";

const BpInfo = (props) => {
    const{date, systolic, diastolic,exerciseTime, strengthTime, caloriesConsumedVeggie,caloriesConsumedGeneral } = props.location.state.bp;
    const date1 = date.slice(0,10);
    const time = date.slice(11,19);
    const percentage = ((parseInt(caloriesConsumedVeggie)/parseInt(caloriesConsumedGeneral))*100).toFixed(2);
  return (
    <did className="main">
        
            <div className="content">
                <div className="header8">Date: {date1} Time: {time}</div>
                <div className="description">Systolic: {systolic}</div>
                <div className="description2">Diastolic: {diastolic}</div>
                <div className="description3">CardioVascular Exercise: {exerciseTime} hours</div>
                <div className="description4">Strength Training: {strengthTime} hours</div>
                <div className="description5"> You consumed {caloriesConsumedGeneral} calories during your most recent meal.</div>
                <div className="description6">{caloriesConsumedVeggie} calories of veggies were consumed during your most recent meal.</div>
                <div className="description7">{percentage}% of the calories in your last meal were from eating veggies!</div>
            
        </div>
        <div className="backButton">
            <Link to="/bplist">
                <button className="ui button red">Back</button>
            </Link>
        </div>
    </did>
    
  );
};

export default BpInfo;