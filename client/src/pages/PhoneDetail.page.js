import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Header } from "../components/Header";
import { ImageWrapper } from "../components/Image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const PhoneDetailPage = connect((state) => ({ phones: state.phones }))(
  ({ phones, match }) => {
    const id = match.params.id;
    const [list, setList] = useState();

    useEffect(() => {
      setList(phones);
    }, [phones]);

    const styleCard = {
      width: "18rem",
      margin: "2rem",
    };

    return (
      <>
        <Header />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              {list && (
                <Card style={styleCard}>
                  <Card.Body>
                    <ImageWrapper>
                      <img
                        src={`http://localhost:3000/static/images/${list[id].imageFileName}`}
                        alt="phone"
                      />
                    </ImageWrapper>
                    <Card.Title>
                      {list[id].name} - {list[id].manufacturer}
                    </Card.Title>
                    <Card.Text>
                      <b>Description: </b>
                      {list[id].description}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <b>Color: </b>
                      {list[id].color}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Price: </b>
                      {list[id].price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Screen: </b>
                      {list[id].screen}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Processor: </b>
                      {list[id].processor}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Ram: </b>
                      {list[id].ram}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
);
