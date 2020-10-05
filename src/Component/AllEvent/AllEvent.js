import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import './AllEvent.css'
import { userContext } from '../../App';
import Header from '../Header/Header';
const AllEvent = () => {
    const[event,setEvent]=useState([])
    const[signInUser,setSignInUser]=useContext(userContext)
    
    useEffect(()=>{
      fetch('https://protected-hamlet-68740.herokuapp.com/getEvent?email='+signInUser.email)
     .then(res=>res.json())
     .then(data=>setEvent(data))
    },[event])

  const deleteEvent =(id)=>{
     fetch(`https://protected-hamlet-68740.herokuapp.com/deleteEvent/${id}`,{
       method: 'DELETE',
     })
    }
    return (
      <Container className="event-main">
        <Header></Header>
          {
               event.map(info=>
                <div className="all-event">
                <img src={info.img} alt=""/>
                <div className="event-info">
                    <h5>{info.organization}</h5>
                    <p>{info.date}</p>
                   <button onClick={()=>deleteEvent(info._id)}  className="event-btn">cancel</button>
              </div>
             </div>
            )
          }
        </Container>
    );
};
export default AllEvent;