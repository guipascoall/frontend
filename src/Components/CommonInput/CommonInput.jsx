import React from "react";
import PropTypes from "prop-types";
import {StyleCommonInput } from "./Styles";

function CommonInput({type, register, placeholder}) {
    return (
        <StyleCommonInput 
        type = {type} 
        placeholder={placeholder}
        {...register}/>
    );
}

CommonInput.propTypes = {
    type: PropTypes.string,
    register: PropTypes.object,
    placeholder: PropTypes.string,
};

export default CommonInput;



