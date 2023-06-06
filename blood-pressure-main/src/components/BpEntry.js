import React from "react";

import {Link} from "react-router-dom";

const BpEntry = (props) => {
  const { id, date, systolic, diastolic } = props.bp;
  var year = date.slice(0,4);
  var month = date.slice(5,7);
  var day = date.slice(8,10);
  var hour = date.slice(11,13)-8;
  var mins = date.slice(14,16);
  
  return (
    <div className="item">
      <div className="content">
        <Link to={{pathname:`/bp/${id}`, state:{bp:props.bp}}}>
        <div className="headerbp">Date-{month}/{day}/{year}</div>
        <div>Time(military)-{hour}:{mins}</div>
        <div>Systolic-{systolic} mmHg</div>
        <div>Diastolic-{diastolic}mmHg</div>
        </Link>
      </div>
      <i
        className="trash icon"
        style={{ color: "red"}}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{pathname:`/edit`, state:{bp: props.bp}}}>
       <i
        className="edit icon"
        style={{ color: "blue"}}
      ></i>
      </Link>
    </div>
  );
};

export default BpEntry;