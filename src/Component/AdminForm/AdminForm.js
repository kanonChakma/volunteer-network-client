import React, { useState } from 'react';
import './AdminForm.css'
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png'
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faPlus} from '@fortawesome/free-solid-svg-icons';
const AdminForm = () => {
  const[data,setData]=useState({
    title:'',
    date:'', 
    description:'',
    organization:'',
})
    const handleBlur=(e)=>{
      const info={...data}
      info[e.target.name]=e.target.value;
        setData(info);
       }
  const handleForm=()=>{
      fetch('http://localhost:5000/adminInsert',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        })
      .then(res=> res.json())
      .then(result=>{
        document.getElementById('name').value=''
        document.getElementById('date').value=''
        document.getElementById('org').value=''
        document.getElementById('text').value=''
      })
    }
    return(
        <Container>
            <Row className="admin-info">
                <Col sm={6} md={3}><img className="adminlogo"  src={logo} alt=""/></Col>
                <Col sm={6} md={9}><h3>Add event</h3></Col>
          </Row>
          <Row>
                <Col  sm={6} md={3} className="admin-form">
                     <h5><FontAwesomeIcon icon={ faUser }/> <Link to="/admin">volunteer register list</Link></h5>
                     <h5><FontAwesomeIcon icon={faPlus}/><Link to="/adminform"> add event</Link></h5>
                </Col>
                <Col sm={6} md={9} className="admin-form">
                  <Row>
                      <Col>
                        <label>Event</label><br/>
                        <input onBlur={handleBlur} placeholder="Enter title" type="text" name="title" id="name"/>
                      </Col>
                      <Col>
                      <label>Event date</label>
                        <input onBlur={handleBlur} type="date"  name="date" id="date"/>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        <label>Organization</label><br/>
                        <input onBlur={handleBlur} placeholder="Enter organization" type="text" name="organization" id="org"/>
                      </Col>
                      <Col>
                        <label>Upload image</label><br/>
                        <input type="file" onBlur={handleBlur} name="img"/>
                      </Col>
                  </Row>
                  <Row>
                        <Col>
                          <label>Description</label><br/>
                          <textarea rows="4" cols="50" onBlur={handleBlur} name="description" id="text">
                                  Enter text here...
                          </textarea>
                          </Col>
                  </Row>
                  <Row>
                      <input onClick={handleForm} type="button" value="submit"/>
                  </Row>
                </Col>
          </Row>
</Container>
    );
};

export default AdminForm;