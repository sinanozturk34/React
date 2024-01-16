import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu} from "semantic-ui-react";
import SignedOut from "./SignedOut";
import Signedln from "./Signedln";
import { useNavigate } from "react-router-dom";

export default function Navi() {

 const [isAuthenticated, setIsAuthenticated] = useState(true)

 const navigate = useNavigate();

 function handleSignOut() {
  setIsAuthenticated(false)
  navigate("/") 
 }
 function handleSignIn() {
  setIsAuthenticated(true)
 }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
           <CartSummary/> 
            {isAuthenticated? <Signedln signOut={handleSignOut} bisey="1"/>: 
            <SignedOut signIn={handleSignIn}/>}
           
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
