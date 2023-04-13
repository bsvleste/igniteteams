import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import{UsersThree } from 'phosphor-react-native'
 export const ContainerGroupCard = styled(TouchableOpacity)`
  ${({theme})=>css`
  width: 100%;
  height: 90px;
  background-color: ${theme.COLORS.GRAY_500};
  border-radius: 6px;
   flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 32px;
  `}
 `;
export const Title = styled.Text`
  ${({theme})=>css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`
export const Icon = styled(UsersThree).attrs(({theme})=>({
  size:theme.FONT_SIZE.XXL,
  color:theme.COLORS.GREEN_700,
  weight:'fill'
}))`
  margin-right: 20px;
`