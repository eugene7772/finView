import React from 'react';
import classes from "./Auth.module.css";
import AuthButton from "../UI/button/auth_button/AuthButton";

const Auth = () => {
    return (
        <div className={classes.auth}>
            <AuthButton>Войти</AuthButton>
            <AuthButton>Создать профиль</AuthButton>
        </div>
    );
};

export default Auth;