import styled, { css } from "styled-components/native";
import {MaterialIcons } from '@expo/vector-icons'
export const ContainerPlayerCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
  height: 56px;
  border-radius: 8px;
  ${({theme})=>css`
    background-color: ${theme.COLORS.GRAY_500};
   `}
`
export const Name = styled.Text`
  flex:1;
  ${({theme})=>css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color:${theme.COLORS.GRAY_200}
  `}
`
export const Icon = styled(MaterialIcons).attrs(({theme})=>({
  size:24,
  color:theme.COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 4px;
`