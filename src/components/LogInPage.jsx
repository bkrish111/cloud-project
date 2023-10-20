import React from 'react'
import { Button, Navbar, Card } from "react-bootstrap";
import { useRouteMatch } from 'react-router-dom';

// rfc
function LogInPage() {
    let { path, url, location } = useRouteMatch();
    const host=window.location.host

    return (
        
        <div style={{ 
            backgroundImage: `url("https://img.freepik.com/free-vector/cloud-network-system-background-vector-social-media-banner_53876-111844.jpg")` 
          }}>
            <div>
            <Navbar bg="primary" variant="dark" style={{ 
            backgroundImage: `url("https://avatars.githubusercontent.com/u/30351660?s=280&v=4")` 
          }}>
                <Navbar.Brand class="justify-content-end">Bhargav-cloud</Navbar.Brand>
            </Navbar>
            <Card style={{ width: '30rem', margin: "200px", justifyContent: "justify-content-center"}}>
                <Card.Header style={{
        backgroundColor: '#A5D6A7'}}>Introducing Bhargav-Cloud App...!</Card.Header>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Card.Text></Card.Text>
                    <Button variant="success" href="https://bhargavcloud.auth.us-east-2.amazoncognito.com/login?client_id=6quvjf6a9li8nki8fv0h50g36n&response_type=token&scope=email+openid+phone+profile&redirect_uri=https%3A%2F%2Fb6a0-160-238-75-16.ngrok-free.app">
                Sign In / Sign Up
             </Button>
             
            
        </Card.Body>
                
            </Card>
            </div>

        </div>

    )
}
console.log(window.location.hash)

export default LogInPage
