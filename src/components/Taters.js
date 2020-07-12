import React from 'react'
import { Container } from 'semantic-ui-react'
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
     
        <Container>
        </Container>

        </div>
        <DemoContainer>
        <div className="background-img-demo">
            
        </div>
        </DemoContainer>
        </>
    )
}