import { UsersThree } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const ContainerNewGroup = styled.View`
  ${({theme})=>css`
    flex:1;
    background-color: ${theme.COLORS.GRAY_600};
    padding: 24px;
   
    `}
`;
export const ContentNewGroup = styled.View`
  flex:1;
  justify-content: center;
`
export const Icon = styled(UsersThree).attrs(({theme})=>({
  size:56,
  color:theme.COLORS.GREEN_700, 
  weight:'fill'
}))`
  align-self: center;
`