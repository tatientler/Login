import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { InputWrapper } from "./Input.styled";

export function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);

    const { fieldName, defaultValue = "", registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return (
        <InputWrapper>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <input
                ref={inputRef}
                id={fieldName}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span style={{ color: "#f00" }}>{error}</span>}
        </InputWrapper>
    );
}
