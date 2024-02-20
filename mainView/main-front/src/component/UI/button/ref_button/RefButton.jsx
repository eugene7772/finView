import React from 'react';
import classes from './RefButton.module.css';

const RefButton = (props) => {
    return (
        <button className={classes.refBtn}>
            {props.children}
        </button>
    );
};

export default RefButton;