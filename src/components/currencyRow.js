import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function CurrencyRow(props) {
    return (
        <Col md={12} lg={5}>
          <Form.Select onChange={props.onChangeCurrency} value={props.selectedCurrency} style={{background: 'rgb(165, 165, 165)', cursor: 'pointer'}} size="lg" className='py-3 mb-3'>
              { props.option.map((item, idx) => <option key={idx}>{item}</option>)}
             
              
          </Form.Select>

          <Form.Control value={props.amount} size="lg" type="number" placeholder="Введите сумму" className='py-3' onChange={props.onChangeAmount}/>
        </Col>
     
    )
}
