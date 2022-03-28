import React from "react";
import { Form } from 'react-bootstrap';

export default function DefaultBase() {
  return (
    <div className="w-25">
      <Form.Select size="lg" style={{cursor: 'pointer'}}>
        <option>RUB</option>
      </Form.Select>
     
    </div>
  );
}
