import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

export default function Navigation() {

  
  return (
    <div className={classes.Navigation}>
      <Container className={classes.NavContainer}>
        <div className={classes.logo}>Convert Currencies</div>
        <ul >
          <NavLink to="/">Конвертер</NavLink>
          <NavLink to="lists">Курсы валют</NavLink>
          
        </ul>
      </Container>
        
    </div>
  )
}
