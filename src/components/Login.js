import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForget = () => {
        if (!userEmail) {
            alert('Please enter your email')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Reset password has been sent to your email')
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <button className="btn btn-primary" type="submit">Login</button>
            </Form>
            {success && <p className='text-success'>Successfully login</p>}
            {!success && <p className='text-success'>Wrong Password</p>}
            <p><small>New to this website? Please <Link to='/register'>register</Link></small></p>
            <p>Forget Password? <Button onClick={handleForget} variant="link">Please Reset</Button></p>
        </div>
    );
};

export default Login;