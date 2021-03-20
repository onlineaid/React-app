import React from 'react';
import './sign-in.scss';
import FormInput from "../form-input/form-input";
import CustomBtn  from "../custom-btn/custom-btn";

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIN extends React.Component {
    constructor(props){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.PreventDefault();
        this.setState({email: "", password: ""})
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState ({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange} 
                    name="email" type="email" 
                    value={this.state.email} 
                    label= "email"
                    required />

                    {/* <label htmlFor="">Email</label> */}

                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label= "password"
                    required />

                    {/* <label htmlFor="">Password</label> */}
                    <div className="btns">
                        <CustomBtn type="submit">Sign In</CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} googleBtn>
                            sign in with google 
                        </CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default SignIN;