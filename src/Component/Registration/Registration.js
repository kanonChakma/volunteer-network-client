import React, { useContext, useEffect, useState } from 'react';
import './Registration.css'
import { Container } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png'
import { userContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';

const Registration = () =>{
    const[ signInUser,setSignInUser]=useContext(userContext)

    const{title}=useParams()
    const history=useHistory()

   const[data,setData]=useState({
        date:'', 
        description:'',
        organization:title,
       })
    useEffect(()=>{
        fetch('http://localhost:5000/addImage?title='+title)
        .then(res=> res.json())
        .then(result=>{
            signInUser.img=result.img;
        })
    },[])

    const handleBlur=(e)=>{
        const info={...data}
            info[e.target.name]=e.target.value;
            setData(info);
        }
    const handleSubmit=() =>{
        const allinfo={...data,...signInUser}
        fetch('http://localhost:5000/addData',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(allinfo),
        })
        history.push("/event");
    }
    return (
        <Container className="text-center">
            <img className="logo" src={logo} alt=""/>
             <form  className="register">
                <h4>Register as a Volunteer</h4>
                <input type="text"  className="" name="" value={signInUser.name} id=""/><br/>
                <input type="email" name="" value={signInUser.email} id=""/><br/>
                <input onBlur={handleBlur} type="date" name="date"/><br/>
                <input type="text" onBlur={handleBlur} name="description" placeholder="Description" id=""/><br/>
                <input type="text" name="" value={title} id=""/><br/>
                <input onClick={handleSubmit} type="button" value="Registration"/>
             </form>
        </Container>
    );
};
export default Registration;