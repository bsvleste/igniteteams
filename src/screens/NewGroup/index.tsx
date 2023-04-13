import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highligh } from '@components/Highlight'
import * as S from './styles'
export function NewGroup() {
  return (
    <S.ContainerNewGroup>
      <Header showBackButton />
      <S.ContentNewGroup>
        <S.Icon />
        <Highligh
          title='Nova Turma'
          subTitle='Crie a turma para adicionar as pessoas'
        />
        <Button title="Criar" />
      </S.ContentNewGroup>
    </S.ContainerNewGroup>
  )
} 