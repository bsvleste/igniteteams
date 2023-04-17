import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@components/Button'
import { Container } from '@components/Container/styles'
import { Header } from '@components/Header'
import { Highligh } from '@components/Highlight'
import { Input } from '@components/Input'
import * as S from './styles'
import { groupCreate } from '@storage/group/groupCreate'
export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()
  async function handleNewGroup() {
    try {
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      throw error
    }
  }
  return (
    <Container>
      <Header showBackButton />
      <S.ContentNewGroup>
        <S.Icon />
        <Highligh
          title='Nova Turma'
          subTitle='Crie a turma para adicionar as pessoas'
        />
        <Input placeholder='Nome da turma' onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.ContentNewGroup>
    </Container>
  )
} 