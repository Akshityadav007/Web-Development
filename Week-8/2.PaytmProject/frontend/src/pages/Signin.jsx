import { useState } from 'react';
import { ButtomWarning } from '../components/BottomWarning';
import { Button } from "../components/Button";
import {Heading} from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox onChange={(e) => { setUsername(e.target.value) }} label={"Email"} name="username"  placeholder={"john.conner@gmail.com"} />
                <InputBox onChange={(e) => { setPassword(e.target.value) }} label={"Password"} name="password" placeholder={"john123"} />
                <div className="pt-4">
                    <Button onPress = { async () => {
                        const response = await axios.post('http://localhost:3000/api/v1/user/signin?username=', { username, password });
                        if(response.data.token){
                            localStorage.setItem('token',response.data.token);
                            navigate('/dashboard');
                        }
                    }} label={"Sign in"} />
                </div>
                <ButtomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    </div>
}