import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './SecondPage.module.css'
import { Row } from 'react-bootstrap'
import TableList from '../../components/TableList/TableList'
import DefaultBase from '../../components/DefaultBase/DefaultBase'
import { useEffect } from 'react';
import { useState } from 'react';

export default function SecondPage() {
  const BASE_URL = 'https://www.cbr-xml-daily.ru/latest.js'
  const [values, setValues] = useState([])

  
  useEffect(() => {
    fetch(`${BASE_URL}`)
    .then(res => res.json())
    .then(data => {
      
      const count = ["au", "az", "io", "am", "by", "bg", "br", "hu", "hk", "gl", "us", "eu"]
         const result = Object
      .entries(data.rates)
      .map((entry, idx) => ({[entry[0]]: 1 / entry[1], country: count[idx]}));
      setValues(result.slice(0,12).reverse())
      })
     
      
      
  }, [])





  return (
      <div className={classes.SecondPage}>
          <Container className='pt-5'>
            <DefaultBase/>
            <Row className='pt-2'>
              {values.map((item, idx) => <TableList key={idx} values={item}/>)}
              
            </Row>
         </Container>
      </div>
    
  )
}
