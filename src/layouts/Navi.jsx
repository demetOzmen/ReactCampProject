import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useSelector } from 'react-redux';

import {useHistory, useNavigate} from "react-router-dom"

export default function Navi() {
  const {cartItems}= useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate()
  
  function handleSignOut(){
    setIsAuthenticated(false)
    navigate("/")
  }
  function handleSignIn(){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted size fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.lenght>0&&<CartSummary />}
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}              
              
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
