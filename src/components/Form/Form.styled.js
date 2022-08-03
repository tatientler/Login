import styled from "styled-components"
import { Form as Unform } from '@unform/web'

export const StyledForm = styled(Unform)`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 261px;
    padding: 0px;
    width: 309px;

    @media screen and (max-width: 640px) {
        height: 154px;
    }
`
