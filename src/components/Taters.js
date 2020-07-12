import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import {NavBar} from './NavBar'
import styled from 'styled-components'

const DemoContainer = styled.div`

    display: flex;
    min-height: 75vh;

`;



export const Taters = () => {
    return (
        <>
        <div className="container-fluid background-img-taters mx-0 px-0">
     
        <div className= "background-img-height text-center" style={{background:"transparent"}}>
            <div className="d-none d-sm-none d-md-block text-card-panel"></div>
            <div className="text-card-panel">
            <p className="lead lavender">
            YOUR AFFORDABLE CURBSIDE PICKUP SOLUTION
            </p>
            <Header className="d-none d-sm-none d-md-block" as="h1" style={{fontSize: '3.5rem'}}>
                Taters
                <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                 helps you build stronger relationships with your customers.
            </Header>
            <Header className="d-block d-sm-block d-md-none" as="h1" style={{fontSize: '2.5rem'}}>
                Taters
                <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                 helps you build stronger relationships with your customers.
            </Header>
            </div>



        </div>

        </div>
        <DemoContainer>
        <div className="background-img-demo">
            
        </div>
        </DemoContainer>
        </>
    )
}