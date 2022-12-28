
import React, { useState} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.png'
import {  useNavigate } from 'react-router-dom';


const Login = () => {

    const [toggle, setToggle] = useState(false);

    const navigate=useNavigate();


   const login=()=>{
          navigate('/home');
   }

    return (
        <div className="WholeContainer">
            <div className='WholeContainer-wrapper mx-auto  shadow-lg' >
                <div className={`formContainer sign-in-container ${toggle ? 'sign-in-container-right-active' : ''} `}>
                  <form>
               
                        <h1>Sign in</h1>  
                        <span className='mb-3'>or use your account</span>
                        <FloatingLabel
                            label="Email address"
                            className="mb-3"
                          >
                            <Form.Control  type="email" id='email' placeholder="email" />
                           
                        </FloatingLabel>
                        <FloatingLabel 
                        label="Password">
                        <Form.Control type="password" id='password' placeholder="Password" />
                      
                        </FloatingLabel>

                        <a href="#ddd">Forgot your password?</a>

                        <Button type="submit" variant="primary" onClick={()=>login()}>Login</Button>
                    </form> 
                </div>
                <div className={`formContainer sign-up-container ${toggle ? 'sign-up-container-right-active' : ''} `}>
                    {/* <form >
                        <h1>Create Account</h1>
                       
                        <span className='mb-3'>or use your email for registration</span>

                         <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>

                        <Button variant="primary" className='mt-3'>Sign Up</Button>
                    </form> */}
                    <form>
                    <h3>Feature coming soon...</h3>

                    </form>

                </div>

                <div className={`overlay-container ${toggle ? 'overlay-container-right-active' : ''}`}>

                    <div className={`overlay ${toggle ? 'overlay-right-active' : ''}`}>
                        <div className={`overlay-panel overlay-left ${toggle ? 'overlay-left-right-active' : ''}`}>
                            <div><img width={200} height={40} alt="VerySmart" src={logo}></img></div>
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                            
                            <Button variant="light" size="sm" className="overlay-btn" onClick={() => setToggle(!toggle)}>Sign In</Button>
                        </div>
                        <div className={`overlay-panel overlay-right  ${toggle ? 'overlay-right-right-active' : ''}`}>
                            <h1><img width={250} height={40} alt="VerySmart" src={logo}></img></h1>
                            <p>Did you forget your password, no worries click below.</p>
                          
                            <Button variant="light" size="sm" className="overlay-btn" onClick={() => setToggle(!toggle)}>Forget password</Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Login
