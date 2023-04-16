import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'
import { FilterStylesProps } from './styles'
type FilterProps = TouchableOpacityProps & FilterStylesProps & {
  title: string
}
export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <S.ContainerFilter
      isActive={isActive}
      {...rest}>
      <S.Title>{title}</S.Title>
    </S.ContainerFilter>
  )
}