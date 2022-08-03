import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import EyeSlashIcon from './icon/eyeSlash.svg'
import EyeIcon from './icon/eye.svg'

import { InputGroup, StyledInput } from "./Input.styled";

export function Input({ name, label, backgroundColor, borderColor, showEyeSlash, ...rest }) {
    const inputRef = useRef(null);

    const { fieldName, defaultValue = "", registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    function toggleShowPassword(e) {
        const inputTypeClickedElement = e.target.previousElementSibling.type

        if (inputTypeClickedElement === 'password') {
            e.target.previousElementSibling.type = 'text'
            e.target.src = EyeIcon
        } else {
            e.target.previousElementSibling.type = 'password'
            e.target.src = EyeSlashIcon
        }
    }

    return (
        <StyledInput
            backgroundColor={backgroundColor}
            borderColor={borderColor}
        >
            {label && <label htmlFor={fieldName}>{label}</label>}

                <InputGroup>
                    <input
                        ref={inputRef}
                        id={fieldName}
                        defaultValue={defaultValue}
                        {...rest}
                    />
                    
                    {showEyeSlash && <img src={EyeSlashIcon} alt='EyeSlash' onClick={toggleShowPassword}/>}
                </InputGroup>

            {error && <span style={{ color: "#f00" }}>{error}</span>}
        </StyledInput>
    );
}
