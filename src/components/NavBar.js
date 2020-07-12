import React, {useState, useEffect} from 'react'
import { Menu, Button, Icon, Header, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DropDownButton = styled.div`


    background: transparent;
    padding: 1rem;
    margin: .5rem;
    color: lavender;
    transition: all 0.2s;
    border-radius: 10rem;
    transform: scale(0.8);

    &:hover{
        background: rgba(10,10,10, 0.3);
        color: white;
        transform: scale(1.02);
        cursor: pointer;



    }

    &:hover .iconhover{
        color: white;
    }

    &:active{
        background: rgba(10,10,10, 0.4);
    }
`;


export const NavBar = () => {

    const [currPage, setCurrPage] = useState('home');
    const [dropDown, setDropDown] = useState(false);

    const toggleMenu = ()=>{
   
        setDropDown(!dropDown);
    }

    return (
        <>
        <Menu borderless secondary className="bar-background d-flex align-items-center">
        <Link to="/">
            <Menu.Item
            name='home'
            onClick={(e, {name})=> setCurrPage(name)}
            className = "d-none d-sm-none d-md-flex align-items-center"
            >
                <img src="./images/AOH-Bug-White@2x.png"/>
                <Header as='h1' className = {currPage === 'home' ? "d-none d-sm-none d-md-flex my-auto" : "d-none d-sm-none d-md-flex my-auto"}>&nbsp;All of the house</Header>
            </Menu.Item>
            <Menu.Item
            name='home'
            onClick={(e, {name})=> {
                setCurrPage(name);
                toggleMenu();
            }}
            className = "d-flex d-sm-flex d-md-none align-items-center"
            >
                <img src="./images/AOH-Bug-White@2x.png"/>
                <Header as='h1' className = {currPage === 'home' ? "d-none d-sm-none d-md-flex my-auto" : "d-none d-sm-none d-md-flex my-auto"}>&nbsp;All of the house</Header>
            </Menu.Item>
        </Link>
        <Link to="/taters">
        <Menu.Item
          name='taters'
          active={currPage === 'taters'}
          onClick={(e, {name})=> setCurrPage(name)}
          className = {currPage === 'taters' ? "active-text d-none d-sm-none d-md-flex" : "d-none d-sm-none d-md-flex"}
        >
            Taters
        </Menu.Item>
        </Link>
        <Link to = "/eventsat">
        <Menu.Item
          name='Events'
          active={currPage === 'Events'}
          onClick={(e, {name})=> setCurrPage(name)}
          className = {currPage === 'Events' ? "active-text d-none d-sm-none d-md-flex" : "d-none d-sm-none d-md-flex"}
        >
            Events@
        </Menu.Item>
        </Link>
        <Link to="/signin">
        <Menu.Item
          name='signin'
          active={currPage === 'signin'}
          onClick={(e, {name})=> setCurrPage(name)}
          className = {currPage === 'signin' ? "active-text d-none d-sm-none d-md-flex" : "d-none d-sm-none d-md-flex"}
        />
        </Link>
        <Menu.Menu className= "d-none d-sm-none d-md-flex" position='right'>
        <Link to="/signup">
            <Button circular color="pink" animated>
                <Button.Content visible>Sign Up Free</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
        </Link>
        </Menu.Menu>
        <Menu.Menu className="d-flex d-sm-flex d-md-none" position='right'>
            <DropDownButton onClick ={()=>toggleMenu()}>
                <Header as='h1' className="my-auto">  
                    <Icon name="list" className="iconhover"/> 
                </Header>
            </DropDownButton>
        </Menu.Menu>
      </Menu>
    
        {   dropDown ? (

        <div className="d-flex d-sm-flex d-md-none flex-column text-center">
            <Link to="/taters"  onClick={()=>toggleMenu()}>
            <Segment className="hoverDropDown" inverted attached='top'>taters</Segment>
            </Link>
            <Link to="/eventsat" onClick={()=>toggleMenu()}>
            <Segment className="hoverDropDown" inverted attached>Event@</Segment>
            </Link>
            <Link to="/signin"  onClick={()=>toggleMenu()}>
            <Segment className="hoverDropDown" inverted attached='bottom'>Sign In</Segment>
            </Link>
        </div>

        ) : (
            <>
            </>
        )


        }

      </>
    )
    
}
