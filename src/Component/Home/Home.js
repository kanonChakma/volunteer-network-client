import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import './Home.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
const Home = () => {
    const[event,setEvent]=useState([])
    
    useEffect(()=>{
    fetch('http://localhost:5000/getData')
     .then(res=> res.json())
     .then(data=>{
         setEvent(data)
     })
    },[])
    return (
    <Container fluid="xl">
         <Header></Header> 
         <div className="home-search">
             <h3>I GROW BY HELPING PEOPLE IN NEED</h3>
             <input type="text" placeholder="Search" id=""/>
             <button className="home-btn">Search</button>
         </div>
         <div className="card-info">
           {
            event.map(info =>
               <Card className="el" style={{ width: '16rem',margin: '12px 8px'}}>
                    <Card.Img variant="top" src={info.img} />
                    <Card.Body className="event-title">
                        <Link  to={`/registration/${info.title}`}><h3>{info.title}</h3></Link>   
                    </Card.Body>
                </Card>
                )
           }
         </div>
     </Container>
    );
};

export default Home;