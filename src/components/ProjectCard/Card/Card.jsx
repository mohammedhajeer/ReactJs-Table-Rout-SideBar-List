import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { FaMapMarkerAlt, FaBed, FaHome } from "react-icons/fa";

const DCard = (props) => {
    return (
        <Col>
            <Card>
                <Card.Img className='card-image' variant="top" src={props.project.img} />

                <Card.Body>
                    <Card.Title>{props.project.title}</Card.Title>
                    <Card.Text>
                        {props.project.dec}
                    </Card.Text>

                    <Row xs={12} style={{alignItems: 'center'}}>
                        <Col xs={5}>
                            <Row xs={12} style={{alignItems: 'center'}}>
                                <Col style={{ }} xs={2}><FaMapMarkerAlt size={13}/></Col>
                                <Col style={{fontSize: 13}} xs={8}>
                                    <div>
                                    {props.project.loc}
                                    </div>
                                    </Col>
                            </Row>
                        </Col>


                        <Col xs={3}>
                            <Row xs={12} style={{alignItems: 'center'}}>
                                <Col style={{}} xs={4}><FaBed size={13}/></Col>
                                <Col style={{ fontSize: 13}} xs={4}>{props.project.numBed}</Col>
                            </Row>
                        </Col>

                        <Col xs={4}>
                            <Row xs={12} style={{alignItems: 'center'}}>
                                <Col style={{}} xs={3}><FaHome size={13}/></Col>
                                <Col style={{fontSize: 13}} xs={8}>{props.project.buildType}</Col>
                            </Row>
                        </Col>

                    </Row>

<Row style={{margin: 10}}>

<Button style={{borderRadius: 30, color: '#000'}} variant="outline-secondary">Vew listing details</Button>

</Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DCard;
