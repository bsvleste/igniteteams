import styled, { css } from "styled-components/native";
import{Clipboard } from 'phosphor-react-native'
export const ContainerListEmpty = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`
export const Messsage = styled.Text`
  ${({theme})=>css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`
export const Icon = styled(Clipboard ).attrs(({theme})=>({
  size:theme.FONT_SIZE.XXL,
  color:theme.COLORS.GRAY_300,  
}))`
  margin-right: 20px;
`