import React from "react";
import { Form } from "react-bootstrap";

export const ComponentsFormInput = (props) => {
  const { className, formLabel, textMuted } = props;
  return (
    <>
      <Form.Group className={className}>
        <Form.Label>{formLabel}</Form.Label>
        <Form.Control type={formLabel} placeholder={formLabel} />
        <Form.Text className="text-muted">{textMuted}</Form.Text>
      </Form.Group>
    </>
  );
};
