import React from 'react';
import classes from "./AuthButton.module.css";

const AuthButton = (props) => {
    return (
        <button className={classes.authBtn}>
            {props.children}
        </button>
    );
};

export default AuthButton;
