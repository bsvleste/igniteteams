import styled, { css } from 'styled-components/native';

export const ContainerGroup = styled.View`
    ${({theme})=>css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding: 24px;
    `}
`
export const Titulo = styled.Text`
    ${({theme})=>css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`