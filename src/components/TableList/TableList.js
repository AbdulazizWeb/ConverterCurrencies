import React from 'react'
import classes from './TableList.module.css'
import { Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

export default function TableList(props) {

  const { values } = props

 const key = Object.keys(values)
 const value = Object.values(values)

  return (
    <>
    <Col md={6} >
       <div className={classes.TableList + ' mt-3'}>
       <span className={`fi fi-${values.country}`} style={{fontSize: '30px'}}></span>
       <h4 className='ps-4'><b>1 {key[0]}</b> &nbsp;--------- &nbsp;</h4>
       <NumberFormat
       format={'######'}
        value={value[0]}
        className="foo"
        displayType={'text'}
        prefix={'₽'}
        thousandSeparator={true}
        renderText={(value, props) => <h4 {...props}>{value}&nbsp; <b>₽</b></h4>}
      />
       </div> 
    </Col>
   
    </>
  )
}
