import React from 'react';
import classes from "./HeadRefs.module.css";
import RefButton from "../UI/button/ref_button/RefButton";

const HeadRefs = () => {
    return (
        <div className={classes.headRefs}>
            <RefButton>Новости</RefButton>
            <RefButton>Котировки</RefButton>
            <RefButton>О сайте</RefButton>
        </div>
    );
};

export default HeadRefs;