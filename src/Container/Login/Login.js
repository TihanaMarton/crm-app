import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Login.module.css';

const UserLogin = (props) => {
  const { email,
    setEmail, password,
    setPassword, handleLogin,
    handleSignUp, hasAccount,
    setHasAccount, emailError,
    passwordError } = props;

  return (
    <div>
      <header className='App-Login-header'>
        <div className='container'>
          <div className='row justify-content-center mt-5'>
            <div className='col-6 text-center'>

              <Form className='mt-5'>
                <Form.Group>
                  <Form.Label>User</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter e-mail'
                    autoFocus required value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Form.Text className={style.errorMsg}>{emailError}
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Text className={style.errorMsg}>{passwordError}
                  </Form.Text>
                </Form.Group>
                <div>
                  {hasAccount ? (
                    <>
                      <Button variant='info' type='submit'
                        onClick={handleLogin}>
                        Sign in
                      </Button>
                      <p className={style.btnContainer}>Don't have an account? <span className={style.spanContainer}
                        onClick={() => setHasAccount(!hasAccount)}
                      >Sign up</span> </p>
                    </>
                  ) : (
                      <>
                        <Button variant='info' type='submit'
                          onClick={handleSignUp}>
                          Sign up
                        </Button>
                        <p className={style.btnContainer}>Have an account? <span className={style.spanContainer}
                          onClick={() => setHasAccount(!hasAccount)}
                        >Sign in</span> </p>
                      </>
                    )}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserLogin;