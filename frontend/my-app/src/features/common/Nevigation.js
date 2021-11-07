import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function Navigation() {
  
  return (
    <Nav>
        <NavList>
            <NavItem><Link to="board">Board</Link></NavItem>
        </NavList>
    </Nav>
  );
}

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
    color: white;
    z-index: 5;
    margin-bottom: 100px
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
    color: white;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
    color: white;
`