import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TopSection = (props: any) => {

    return (
        <Container className='main-header'>
            <Row>
                <Col sm={11}>
                    <h4>{props.headerName}</h4>
                </Col>
                <Col sm={1}>
                    <Row>
                        <Col sm={5} className='button-box-header'>
                            <div className='icon button-header'>{props.icon1}</div>
                        </Col>

                        <Col sm={3}>
                            <div className="icon button-header">{props.icon2}</div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default TopSection;