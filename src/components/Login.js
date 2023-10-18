import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails,CognitoUserPool } from 'amazon-cognito-identity-js';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const userPool = new CognitoUserPool({
    UserPoolId: 'us-east-2_zw7noSiUn',
    ClientId: '6quvjf6a9li8nki8fv0h50g36n',
  });

  const handleLogin = () => {
    const authenticationData = {
      Username: username,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        console.log('Login successful:', session);
        history.push('/user');
        // Redirect to the protected area.
      },
      onFailure: (err) => {
        console.error('Error logging in:', err);
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
