import React, {Fragment, useEffect, useRef, useState} from 'react';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import {Link, useNavigate} from "react-router-dom";
import profilePng from "../../assets/images/profile.png"
import {UserLogin, UserRegistration} from "../../APIRequest/UserApi.js";
import {getToken} from "../../helper/SassionHelper.js";


const LoginRegistration = () => {

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [avatar, setAvatar] = useState(profilePng);
    const [avatarPreview, setAvatarPreview] = useState(profilePng);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = user;

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();
            const file = e.target.files[0];

            if (file) {
                if (file.type.startsWith("image/")) {
                    reader.onload = () => {
                        if (reader.readyState === 2) {
                            setAvatarPreview(reader.result);

                            // Update the user state with the new avatar data
                            setUser({ ...user, avatar: reader.result });
                        }
                    };

                    reader.readAsDataURL(file);
                } else {
                    console.error("Invalid file type. Please select an image.");
                }
            }
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    let navigate = useNavigate()

    useEffect(() => {
        const isAuthenticated = getToken();

        if (isAuthenticated) {
            navigate("/account");
        }
    }, [navigate]);



    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    };


    const loginSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await UserLogin(loginEmail, loginPassword);
            if (result) {
                navigate("/account");
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };


    const registerSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await UserRegistration(user)
            if(result){
                switchTabs(e, "login")            }
        }
        catch (e) {
            console.log(e)
        }
    };
    return (
        <Fragment>
            <div className="LoginSignUpContainer">
                <div className="LoginSignUpBox">
                    <div>
                        <div className="login_signUp_toggle">
                            <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                            <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                        </div>
                        <button ref={switcherTab}></button>
                    </div>

                    <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                        <div className="loginEmail">
                            <MailOutlineIcon/>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div className="loginPassword">
                            <LockOpenIcon/>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                        <Link to="/password/forgot">Forget Password ?</Link>
                        <input type="submit" value="Login" className="loginBtn"/>
                    </form>

                    <form
                        className="signUpForm"
                        ref={registerTab}
                        encType="multipart/form-data"
                        onSubmit={registerSubmit}
                    >
                        <div className="signUpName">
                            <FaceIcon/>
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                name="name"
                                value={name}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpEmail">
                            <MailOutlineIcon/>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                name="email"
                                value={email}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpPassword">
                            <LockOpenIcon/>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                name="password"
                                value={password}
                                onChange={registerDataChange}
                            />
                        </div>

                        <div id="registerImage">
                            <img src={avatarPreview} alt="Avatar Preview"/>
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={registerDataChange}
                            />
                        </div>
                        <input type="submit" value="Register" className="signUpBtn"/>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginRegistration;