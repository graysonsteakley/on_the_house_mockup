import React, {useState} from 'react'
import styled from 'styled-components'
import { Container, Form } from 'semantic-ui-react'
import './LoginStyles.css'
import { Link } from 'react-router-dom';
import {FadeInLeft, FadeInRight, FadeInSection} from '../utils/FadeInSection'

const LoginPageContainer = styled.div`

    height: 98vh;
    width: 100%;
    display: flex;
    background: #263357;
    align-items: center;
    justify-content: center;

`;


const FormContainer = styled.div`

    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    height: auto;
    width: 60%;
    text-align: center;
    background: #263357;
    text-align: center;
    padding: 2rem;

`;

const ImageContainer = styled.div`

width: 100%;
min-height: 98vh;
position: relative;
background: transparent;

&::before{
    content: "";
    position: absolute;
    z-index: 2;
    top: 0; 
    left: 0;
    width: 100%; height: 100%;
    filter: opacity(0.9);
    background-color: #000000;
    background-image: url("./images/iStock-868935172-sm.jpg");
    background-position: center center;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    margin-top: 0rem;
}



`;

export const LoginPage = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSubmit = (e)=>{
        e.preventDefault();
        setUsername('');
        setPassword('');
    }


    return (
      
            <LoginPageContainer className="px-0">
                
                <FormContainer >
                <FadeInLeft>
                    <img className="mb-neg-5" style={{width:'80%', height:'80%'}}src="./images/h-logo.svg" alt="Logo"/>
                    <Form className="mt-neg-5">
                        <Form.Field>
                       
                        <input className="login-form-place" 
                               value={username}
                               onChange={(e)=>setUsername(e.target.value)}
                        placeholder='Username' type="text"/>
                        </Form.Field>
                        <Form.Field>
                       
                        <input className="login-form-place" 
                               value={password}
                               onChange={(e)=>setPassword(e.target.value)}
                        type="password" placeholder='Password' />
                        </Form.Field>
                        <Form.Field>
                        </Form.Field>
                        <div className="btn-group mt-3  ">
                        <div className="center mobile-scale-btn d-flex justify-content-center">
                            <button onClick={(e)=>onHandleSubmit(e)}className="btn">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                </svg>
                                <span>Next</span>
                            </button>
                        </div>
                        </div>
                    </Form>
                    
                    <p className="lead lavender mt-3">
                    Want to get your company started with On the house?
                    </p>
                    <Link to="/signup" className="active-color">
                        Sign up here
                    </Link>
                    </FadeInLeft>
                </FormContainer>
               
                <ImageContainer className="d-none d-sm-none d-md-block"/>
            </LoginPageContainer>
     
    )
}
