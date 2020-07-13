import React from 'react'
import styled from 'styled-components'
import { Header } from 'semantic-ui-react';

const CreateAccountContainer = styled.div`

    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
    justify-content: center;


`;

const ImgContainer = styled.div`

    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;

    img{
        width: 500px;
    }
`;

export const SignUp = () => {
    return (
        <CreateAccountContainer className="text-center">
            <ImgContainer>
                <img src="./images/AOH-Logo-Brand.svg" alt="logo"/>
            </ImgContainer>
            <Header color="black" as="h1" style={{fontSize: '2rem'}}>
            Create your <span style={{fontWeight:'600', fontSize:'2.5rem'}}>All of the House</span>&nbsp;space
            </Header>
        </CreateAccountContainer>
    )
}
