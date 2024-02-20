import React from 'react';
import classes from "./Body.module.css";
import SearchButton from "../UI/button/search_button/SearchButton";

const Body = () => {
    return (
        <div className={classes.body}>
            <SearchButton>Найти котировку...</SearchButton>
        </div>
    );
};

export default Body;