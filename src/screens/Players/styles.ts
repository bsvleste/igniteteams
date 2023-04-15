import styled, { css } from 'styled-components/native';
export const Form = styled.View`
    ${({theme})=>css`
        width: 100%;
        background-color: ${theme.COLORS.GRAY_700};
        flex-direction: row;
        justify-content: center;
        border-radius: 6px;
        `}
`