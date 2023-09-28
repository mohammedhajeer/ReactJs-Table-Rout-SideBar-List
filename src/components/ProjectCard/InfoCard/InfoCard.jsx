import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Chart } from 'primereact/chart';
const documentStyle = getComputedStyle(document.documentElement);

const InfoCard = (props) => {

    const dataChart = [

        {
            datasets: [
                {
                    data: [300, 80],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--green-100')
                    ],

                }
            ]
        },
        {
            datasets: [
                {
                    data: [50, 90],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--red-100')
                    ],

                }
            ]
        },
        {
            datasets: [
                {
                    data: [90, 90],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--blue-100')
                    ],

                }
            ]
        },

    ]

    return (
        <Col>
            <Card>

                <Card.Body>
                    <Row xs={12}>
                        <Col xs={8} style={{ height: 100 }}>
                            <Col>
                                <Card.Title style={{}}>{props.info.title}</Card.Title>
                            </Col>
                            <Col style={{ height: '40%' }}>
                            </Col>
                            <Col style={{}}>
                                <Card.Text style={{}}>{props.info.range}</Card.Text>
                            </Col>
                        </Col>

                        <Col xs={4} style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Chart type="doughnut" data={dataChart[props.idx]} options={props.info.options} className="w-full md:w-30rem" style={{ justifySelf: 'center', alignSelf: 'center' }} />

                        </Col>

                    </Row>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default InfoCard;
