import * as S from './styles'
interface ListEmptyProps {
  message: string
}
export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <S.ContainerListEmpty>
      <S.Icon />
      <S.Messsage>{message}</S.Messsage>
    </S.ContainerListEmpty>
  )
}