import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails,CognitoUserPool} from 'amazon-cognito-identity-js';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userPoolData = {
    UserPoolId: 'your-user-pool-id',
    ClientId: 'your-client-id',
  };

  const userPool = new CognitoUserPool(userPoolData);

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
        console.log('Login successful');
        console.log('ID Token', session.getIdToken().getJwtToken());
        console.log('Access Token', session.getAccessToken().getJwtToken());
        console.log('Refresh Token', session.getRefreshToken().getToken());
        // Redirect to the protected area or perform necessary actions upon successful login.
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

export default Signup;
