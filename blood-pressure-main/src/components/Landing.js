import React from 'react';
import {Link} from 'react-router-dom';
import bpchart from "../images/bpchart.png";

const Landing = () => {
    return (
        
            <div className="about">
                <div className="information">
                    <p>Hypertension is a chronic disease that affects the heart, brain, and kidney.
                    Approximately 1.28 billion adults in the world have hypertension(WHO 2021).
                    Two thirds of this group comes from lower-middle income countries. Risk factors
                    for hypertension include a diet low in fruits and veggies, physical inactivity,
                    consumption of tabacco, and alcohol, and being overweight or obese(WHO 2021). 
                    Although most symptoms go unnoticed there are some symptoms one could have including
                    fatigue, nausea, vomiting, anxiety, confusion, nosebleeds, morning headaches, chest pain
                    and muscle tremors(WHO 2021). There are two parts to blood pressure: Systolic and Diastolic. 
                    Systolic blood pressure is the pressure exerted on the walls of vessels when the heart the heart
                    contracts. Diastolic blood pressure is the pressure exerted on the walls when the heart is at rest.
                    Long terms consequences of unmanaged blood pressure include angina, heart attack, heart failure, 
                    irregular heartbeat, and stroke(WHO 2021). Treatments for high blood pressure include exercise, 
                    cutting out high fat and high carb foods, eating more fruits/veggies, reducing salt intake, cutting out
                    tabacco, cutting out alcohol, managing stress, regularly checking blood pressure, and potentially discussing 
                    medications with a physician. The blood pressure chart below is from the American Heart Association. Take a look at
                    it to better understand where you fall within these categories. 
                    </p>
                </div>
                <Link to="/register">
                    <button className="ui button blue right floated"> Register</button>
                </Link>
                <Link to="/login">
                    <button className="ui button blue right floated"> Login</button>
                </Link>
                <div>
                    <h2>
                        Links To More Information
                    </h2>
                </div>
                <div className="toplink">
                    <tr>
                        <td><a href= "https://www.cdc.gov/bloodpressure/about.htm#:~:text=High%20blood%20pressure%2C%20also%20called,blood%20pressure%20(or%20hypertension)." target="newtab">CDC Website</a></td>
                    </tr>
                </div>
                <div className="bottomlink">
                    <tr>
                        <td><a href= "https://www.who.int/health-topics/hypertension#tab=tab_3" target="newtab2">WHO Website</a></td>
                    </tr>
                </div>

                <div className="pic">
                    <img src={bpchart} alt="bp" style={{maxWidth:950}} />
                </div>
                <div>
                    <h2>
                        References
                    </h2>
                </div>
                <div className="references">
                    <p>
                        1.​“Hypertension.” World Health Organization, World Health Organization, https://www.who.int/news-room/fact-sheets/detail/hypertension.
                        2.Understanding blood pressure readings. www.heart.org. (2022, October 31). Retrieved December 3, 2022, from https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings 
                    </p>
                </div>
            </div>
    );
};

export default Landing;