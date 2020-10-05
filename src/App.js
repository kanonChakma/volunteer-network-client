import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import Registration from './Component/Registration/Registration';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NoMatch from './Component/NoMatch/NoMatch';
import AllEvent from './Component/AllEvent/AllEvent';
import Admin from './Component/Admin/Admin';
import AdminForm from './Component/AdminForm/AdminForm';
export const userContext=React.createContext();
function App(){
  const[signInUser,setSignInUser]=useState({})
  return (
    <userContext.Provider value={[signInUser,setSignInUser]}>
     <Router>
       <Switch> 
         <Route path='/home'>
            <Home></Home>
         </Route>
         <Route path='/admin'>
            <Admin></Admin>
         </Route>
         <Route path='/adminform'>
            <AdminForm></AdminForm>
         </Route>
         <Route path='/login'>
            <LogIn></LogIn>
         </Route>
         <Route path='/event'>
            <AllEvent></AllEvent>
         </Route>
         <PrivateRoute path='/registration/:title'>
            <Registration></Registration>
         </PrivateRoute>
         <PrivateRoute path='/registration'>
            <Registration></Registration>
         </PrivateRoute>
         <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='*'>
            <NoMatch></NoMatch>
         </Route> 
       </Switch>
     </Router>
      </userContext.Provider>
  );
}

export default App;
