import React from 'react'
import { Button, Navbar, Card } from "react-bootstrap";
import { useRouteMatch,Link} from 'react-router-dom';

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
                <Card.Body style={{
        backgroundColor: '#26A69A'}}>
                    <Card.Text>Click the Button Below</Card.Text>
                    {/* <Button  variant="primary" href="https://bhargavcloud.auth.us-east-2.amazoncognito.com/login?client_id=6quvjf6a9li8nki8fv0h50g36n&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fbhargavcloud.me">
                        LogIn / SignUp  { <a href="https://bhargavcloud.auth.us-east-2.amazoncognito.com/login?client_id=6quvjf6a9li8nki8fv0h50g36n&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fbhargavcloud.me"></a> }
                    </Button> */}
                     <Link to="/login">
                            <Button variant="primary">LogIn</Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="primary">SignUp</Button>
                        </Link>
                </Card.Body>
            </Card>
            </div>

        </div>

    )
}

export default LogInPage
