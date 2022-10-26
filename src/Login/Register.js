import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const auth = getAuth(app)

const Register = () => {

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



      const [error, setError] = useState(null);

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        

        if(password.length < 6){
            setError('Password should be 6 character or more')
            return;
        }
        
        // else if(password !== confirm){
        //     setError('your password did not match')
        //     return;
        // }

        createUser(email, password, name)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error));
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter name" />     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className="text-muted">
          {error}
        </Form.Text>
    </Form>
    <button onClick={handleGoogleSignIn}>Google Log In</button>
    <button onClick={handleGithubSignOut}>Git Hub Log In</button>
        </div>
    );
};

export default Register;