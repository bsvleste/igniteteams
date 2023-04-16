import { ButtonIcon } from '@components/ButtonIcon'
import * as S from './styles'
type PlayerCardProps = {
  name: string
  onRemove: () => void
}
export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <S.ContainerPlayerCard>
      <S.Icon
        name="person"
      />
      <S.Name>{name}</S.Name>
      <ButtonIcon
        icon='highlight-remove'
        type='SECONDARY'
        onPress={onRemove}
      />
    </S.ContainerPlayerCard>
  )
}