import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypesStyleProps= "PRIMARY" | "SECONDARY"

type ButtonProps={
  type:ButtonTypesStyleProps
}
export const ContainerButton = styled(TouchableOpacity)<ButtonProps>`
  
    flex:1;
    min-height: 56px;
    max-height: 56px;
    background-color:${({theme,type})=> type === "PRIMARY"? theme.COLORS.GREEN_700: theme.COLORS.RED_DARK} ;
    justify-content:center;
    align-items: center;
    border-radius: 8px;
`;
export const Title = styled.Text`
  ${({theme})=>css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color:${theme.COLORS.WHITE};
  `}
`