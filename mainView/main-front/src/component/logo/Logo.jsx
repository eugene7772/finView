import React from 'react';
import classes from "./Logo.module.css";
import {useNavigate} from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    return (
        <label
            className={classes.logo}
            onClick={() => navigate('/')}
        >
            FinanceView
        </label>
    );
};

export default Logo;