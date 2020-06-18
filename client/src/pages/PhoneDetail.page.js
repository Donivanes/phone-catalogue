import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Header } from "../components/Header";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const Image = styled.div`
  height: 200px;
  width: 200px;
  background-image: ${(props) => props.phoneimg};
`;

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
                    <Image
                      phoneimg={`url(../../public/img/${list[id].imageFileName}`}
                    />
                    <Card.Title>
                      {list[id].name} - {list[id].manufacturer}
                    </Card.Title>
                    <Card.Text>{list[id].description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Color: {list[id].color}</ListGroup.Item>
                    <ListGroup.Item>Price: {list[id].price}</ListGroup.Item>
                    <ListGroup.Item>Screen: {list[id].screen}</ListGroup.Item>
                    <ListGroup.Item>
                      Processor: {list[id].processor}
                    </ListGroup.Item>
                    <ListGroup.Item>Ram: {list[id].ram}</ListGroup.Item>
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
