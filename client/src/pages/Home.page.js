import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { ImageWrapper } from "../components/Image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
                    <ImageWrapper>
                      <img
                        src={`http://localhost:3000/static/images/${phone.imageFileName}`}
                        alt="phone"
                      />
                    </ImageWrapper>
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
