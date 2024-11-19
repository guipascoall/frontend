import React from "react";
import {StyleCommonInput, } from "./Styles";

function CommonInput({placeholder, ...props}) {
    return (
            <StyleCommonInput placeholder = {placeholder} {...props}/>
    );
}

export default CommonInput;


