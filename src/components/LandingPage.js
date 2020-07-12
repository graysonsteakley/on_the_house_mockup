import React from 'react'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import {NavBar} from './NavBar'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className="container-fluid background-img px-0">
        <Container className ="d-flex background-img-height text-center flex-column align-items-center justify-content-center">
            <Header as="h1" style={{color:"white", fontSize: "4rem"}}> 
                Helping 
                <Typed
                className="typed"
                strings={[
                    'you',
                    'restaurants',
                    'hotels',
                    'museums',
                    'venues',
                    'food trucks',
                    'breweries']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
                &nbsp;succeed is why we exist.
            </Header>
            <div className="m2-5"></div>
            <p className="lavender">
                Helping you build better relationships with your guests and improve your margins.
            </p>
            <Button className="mt-2" as={Link} to="/signup" style={{width:'50%', backgroundColor:'rgba(218, 31, 87, 0.8)'}} circular animated="vertical">
                <Button.Content visible>Create a free account</Button.Content>
                <Button.Content hidden>
                    <Icon style={{fontSize:"2rem"}}name='arrow up' />
                </Button.Content>
            </Button>
            <p className="lead small-text mt-1 lavender">
            (100% free to get started. No credit card required)
            </p>
        </Container>
        </div>
    )
}
