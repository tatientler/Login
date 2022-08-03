import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import EyeSlashIcon from './icon/eyeSlash.svg'
import EyeIcon from './icon/eye.svg'

import { InputGroup, StyledInput } from "./Input.styled";

export function Input({ name, label, backgroundColor, borderColor, showEyeSlash, ...rest }) {
    const inputRef = useRef(null);

    const { fieldName, defaultValue = "", registerField, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        })
    },
        changeBorderColor(), [fieldName, registerField]);


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

    function changeBorderColor() {
        if (error) {
            borderColor = '#DC4242'
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
                    onChange={clearError}
                    {...rest}
                />

                {showEyeSlash && <img src={EyeSlashIcon} alt='EyeSlash' onClick={toggleShowPassword} />}
            </InputGroup>

            {error && <span>{error}</span>}
        </StyledInput>
    );
}
