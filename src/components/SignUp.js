import React, {useState} from 'react'
import styled from 'styled-components'
import { Header, Form } from 'semantic-ui-react';

const CreateAccountContainer = styled.div`

    min-height: 110vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: center;


`;

const ImgContainer = styled.div`

    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: -7rem;
    margin-bottom: -10rem;
    img{
        width: 500px;
    }
`;

export const SignUp = () => {

    const [email, setEmail] = useState('');


    const onHandleSubmit = (e)=>{
        e.preventDefault();
        setEmail('');
    }

    return (
        <CreateAccountContainer className="text-center">
            <ImgContainer>
                <img style={{transform: 'scale(.7)'}}src="./images/h-logo.svg" alt="logo"/>
            </ImgContainer>
            <Header color="black" as="h1" style={{fontSize: '2rem'}}>
            Create your <span style={{fontWeight:'600', fontSize:'2.5rem'}}>On the House</span>&nbsp;space
            </Header>
            <p className="lead black mt-3">
            Get started making your On the House space by confirming your email address.
            </p>
    
            <Form className="mt-5 mb-5">
                <Form.Field>
                
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="login-form-place" placeholder='Email Address' type="email"/>
                </Form.Field>
            
          
                <div className="btn-group mt-3  ">
                <div className="center mobile-scale-btn d-flex justify-content-center">
                    <button onClick={(e)=>onHandleSubmit(e)} type="submit" className="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                        </svg>
                        <span style={{color:'black'}}>Next</span>
                    </button>
                </div>
                </div>
            </Form>
   
        </CreateAccountContainer>
    )
}
