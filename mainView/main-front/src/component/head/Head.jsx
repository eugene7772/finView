import React from 'react';
import classes from "./Head.module.css";
import HeadRefs from "../head_refs/HeadRefs";
import Auth from "../auth/Auth";
import Logo from "../logo/Logo";

const Head = () => {
    return (
        <div className={classes.head}>
            <Logo />
            <HeadRefs/>
            <Auth/>
        </div>
    );
};

export default Head;