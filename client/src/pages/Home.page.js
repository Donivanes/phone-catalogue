import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Header } from "../components/Header";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Image = styled.img`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const HomePage = connect((state) => ({ phones: state.phones }))(
  ({ phones }) => {
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
              {list &&
                list.map((phone) => (
                  <Card style={styleCard} key={phone.id}>
                    <Image
                      src={`http://localhost:3000/server/images/${phone.imageFileName}`}
                      alt="phone"
                    />
                    <Card.Body>
                      <Card.Title>{phone.manufacturer}</Card.Title>
                      <Card.Text>{phone.name}</Card.Text>
                    </Card.Body>
                    <Link to={`/phone/${phone.id}`}>
                      <Button variant="primary" block>
                        Specifications
                      </Button>
                    </Link>
                  </Card>
                ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
);
