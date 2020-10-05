import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faUser,faPlus} from '@fortawesome/free-solid-svg-icons';

import logo from '../../logos/Group 1329.png'
import './Admin.css'
const Admin = () => {
    const[data,setData]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getAllEvent')
        .then(res=>res.json())
        .then(result=>{
            setData(result)
        })
    },[data])
    const handleIcon=(id)=>{
        fetch(`http://localhost:5000/deleteEvent/${id}`,{
            method: 'DELETE',
          })
    }
    return(
    <Container>
        <Row className="admin-info">
            <Col sm={6} md={3}><img className="adminlogo"  src={logo} alt=""/></Col>
            <Col sm={6} md={9}> <h3>Volunteer register list</h3></Col>
       </Row>
       <Row>
            <Col  sm={6} md={3} className="admin-form">
                    <h5><FontAwesomeIcon icon={ faUser }/> <Link to="/admin">volunteer register list</Link></h5>
                    <h5><FontAwesomeIcon icon={faPlus}/><Link to="/adminform"> add event</Link></h5>
             </Col>
            <Col sm={6} md={9}>
            <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration date</th>
                        <th>Vlunteer list</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                <tbody>
                    {
                    data.map(info=>
                        <tr>
                        <td>{info.name}</td>
                        <td>{info.email}</td>
                        <td>{info.date}</td>
                        <td>{info.organization}</td>
                        <td onClick={()=>handleIcon(info._id)} className="dlt-icon"><FontAwesomeIcon icon={ faTrashAlt }/></td>
                    </tr>    
                    )
                    }     
                </tbody>
            </Table>
          </Col>
       </Row>
</Container>
    );
};
export default Admin;