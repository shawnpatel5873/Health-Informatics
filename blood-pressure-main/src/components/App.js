import { BrowserRouter as Router, Switch, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Landing from './Landing';
import BpList from './BpList';
import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import AddBp from "./AddBp";
import BpInfo from './BpInfo';
import EditBp from './EditBp';
import Register from './Register';
import Login from './Login';
import AddAppointment from './AddAppointment';


import api from "../api/bps";


function App() {

  
  const [bps, setBps] = useState([]);
  const initialValues = {topId:""};
  var [user, setUser] = useState(initialValues); 
  const initialValues2 = [{ year:"",month:"", day:"",hour:"", mins:"",nameOfProvider:"",typeOfProvider:""}];
  const [can, setCan] = useState(initialValues2);
  const initialValues3 = {name:""};
  const [name, setName] = useState(initialValues3);
  var idMain = "";
  
  
  const retrieveBps = async () => {
    const values =[];
    const response = await api.get("bps");
    var count= 0;
    for (var i = 0; i<response.data.length; i++) {
      if(response.data[i].clientId === idMain) {
        values[count] = response.data[i];
        count++;
      }
    }
    return values;
  };

  const getAllBps = async () => {
    const allBps = await retrieveBps();
    if (allBps.length > 0) setBps(allBps);
  };
 
  const addBpHandler = async (bp) => {
    const request ={
      id:uuid(),
      clientId:user.topId,
      date:new Date(),
      ...bp
    };
    const response = await api.post("/bps", request);
    setBps([...bps, response.data]);  
  };

  const updateBpHandler = async (bp) => {
    console.log(bp);
    const response = await api.put(`/bps/${bp.id}`, bp);
    const{id} = response.data;
    const newListofBps = bps.map( bp => {
      if (bp.id === id ) {
        return {...response.data};
      }
      else {
        return bp;
      }
    });
    setBps(newListofBps);
  };

  const removeBpHandler = async (id) => {
    await api.delete(`/bps/${id}`);
    var newList = [];
    var count = 0;
    for (var i = 0;i<bps.length;i++){
      if(bps[i].id !== id) {
        newList[count] = bps[i];
        count++;
      }
    }
    setBps(newList);
  };




  const fetchApts = async(clientID) =>{
    const response = await api.get("appointments");
    const filter1 =[];
    const filter2 =[];
    
    var count = 0;
    var count2 = 0;
    
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    for (var i = 0; i < response.data.length;i++){
      console.log(response.data[i].clientId);
      console.log(user.topId);
      if(response.data[i].clientId === clientID){
        console.log("FOUND DUDE!");
        filter1[count] = response.data[i];
        count++;
      }
    }

    for (var c = 0; c < filter1.length;c++){
      if(parseInt(filter1[c].year) >= year && parseInt(filter1[c].month) >= month && parseInt(filter1[c].day) >= day){
        filter2[count2] = filter1[c];
          count2++;
      }
    }

    const filter3 = filter2.sort(
      (objA,objB) => 
        new Date(objA.date) - new Date(objB.date)
      );
    return filter3;  
  }

  const allApts = async (clientID) =>{
    const apts = await fetchApts(clientID);
    if(apts.length>0) setCan(apts);
  }

  const addUser = async(userinfo) => {
    const clientList = await api.get("/clients");
    for (var i = 0; i <clientList.data.length;i++){
      if (clientList.data[i].username === userinfo.username||clientList.data[i].email === userinfo.email) {
        return false;
      }
    }
    const request = {
      id:uuid(),
      ...userinfo
    }

    const response = await api.post("/clients", request);
    idMain = request.id;
    setUser({...user,topId:request.id});
    setName({...name, name:userinfo.name});
    setCan([]);
    return true;
  };

  const loginHandler = async(loginInfo) => {
    const clientList = await api.get("/clients");
    var idDB = "";
    idMain = "";
    setCan([]);
    for (var i = 0; i <clientList.data.length;i++){
      if (clientList.data[i].username === loginInfo.username && clientList.data[i].password === loginInfo.password) {
        idDB = clientList.data[i].id;
        idMain = idDB;
        
        setUser({...user, topId:clientList.data[i].id});
        setName({...name, name:clientList.data[i].name});
        await allApts(idMain);
        return true;
      }
    }
    return false;
  };

  const logoutHandler = ()=>{
    const canz = "";
    setUser({...user, topId:""});
    setBps([]);
  };

  const addAppointmentHandler= async (appointment) => {
    const request = {
      clientId:user.topId,
      date: new Date(appointment.year, appointment.month, appointment.day),
      ...appointment
    };
    const response = await api.post("/appointments", request);
    await allApts(user.topId);
  };
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
        <Route path="/"
        exact
        component={Landing} />
        <Route
        path="/register"
        render={(props)=> (
          <Register
          {...props}
          addUser={addUser}
          getAllBps={getAllBps}
          />
        )}
        />
        <Route
        path="/login"
        render={(props)=> (
          <Login
          {...props}
          loginHandler={loginHandler}
          getAllBps={getAllBps}
          allApts={allApts}
          />
        )}
        /> 
        <Route path ="/bplist" 
           render={(props)=> (
              <BpList
              {...props}
              bps={bps}
              can={can}
              name={name} 
              getAllBps={getAllBps}
              logoutHandler={logoutHandler}
              removeBpHandler={removeBpHandler}
              />
            )}
          /> 
        <Route 
          path ="/add" 
          render={(props)=> (
            <AddBp {...props} 
            addBpHandler={addBpHandler}
        
            />
          )}
        />
        <Route 
          path ="/addappointment" 
          render={(props)=> (
            <AddAppointment {...props} 
            addAppointmentHandler = {addAppointmentHandler}
            
        
            />
          )}
        />
        <Route 
            path ="/edit"
            render={(props)=> (
              <EditBp {...props}
              user={user} 
              updateBpHandler={updateBpHandler}/>
            )}
        />
        <Route path="/bp/:id" component={BpInfo} /> 
       </Switch>

      </Router>
      
    </div>
  );
}

export default App;
