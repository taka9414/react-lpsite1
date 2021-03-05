import React from "react";
import { Accordion, Card } from "react-bootstrap";

export const ComponentsAccordion = (props) => {
  const { className } = props;
  return (
    <>
      <Accordion className={className}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            タイトル1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              タイトル1の内容が入ります。
              <br />
              改行テスト
              <br />
              改行テスト
              <br />
              改行テスト
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            タイトル2
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>タイトル2の内容が入ります。</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};
