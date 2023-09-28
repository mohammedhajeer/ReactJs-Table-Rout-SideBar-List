import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InputText } from "primereact/inputtext";

const HeaderList = () => {

    return (
        <Container>
        <Row xs={12} style={{ alignItems: 'center', marginBottom: 15, marginTop: 50 }}>
            <Col xs={6} md={9} sm={5} onSubmit={6}>
                <h5>Your Favorate</h5>
            </Col>
            <Col xs={8} md={3} sm={5} onSubmit={7}>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText style={{height: 30, borderRadius: 33}} placeholder="Search" />
                </span>
            </Col>
        </Row>
    </Container>

    );
};

export default HeaderList;