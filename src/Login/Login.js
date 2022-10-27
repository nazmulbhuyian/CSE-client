import { GoogleAuthProvider, getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import app from '../firebase/firebase.config';


const auth = getAuth(app)

const Login = () => {

  const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            // setUser(user);
            console.log(user);
          })
      
          .catch(error => {
            console.error('error:', error);
          })
    }

    const handleGithubSignOut = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
          const user = result.user
        //   setUser(user)
          console.log(user);
        })
        .catch(error =>{
          console.log('error', error);
        })
      }


    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState(null);


    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => {
          console.error(error)
          setError(error.message)
        });
    }
    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>

      <Form.Text className="text-danger">
            {error}
        </Form.Text>
      
      <Button className='d-block' variant="primary" type="submit">
        Submit
      </Button>
      <div className='mt-3'>
    <button className='btn btn-primary me-3' onClick={handleGoogleSignIn}>Google Log In</button>
    <button className='btn btn-primary' onClick={handleGithubSignOut}>Git Hub Log In</button>
    </div>
      <p>Do not have a account <Link to='/register'>Go to Register</Link></p>
    </Form>
    
    );
};

export default Login;