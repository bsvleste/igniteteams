import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: S.ButtonTypesStyleProps
}
export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.ContainerButton type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.ContainerButton>
  )
}