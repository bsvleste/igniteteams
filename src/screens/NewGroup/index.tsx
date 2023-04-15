import { Button } from '@components/Button'
import { Container } from '@components/Container/styles'
import { Header } from '@components/Header'
import { Highligh } from '@components/Highlight'
import { Input } from '@components/Input'
import * as S from './styles'
export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <S.ContentNewGroup>
        <S.Icon />
        <Highligh
          title='Nova Turma'
          subTitle='Crie a turma para adicionar as pessoas'
        />
        <Input placeholder='Nome da turma' />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.ContentNewGroup>
    </Container>
  )
} 