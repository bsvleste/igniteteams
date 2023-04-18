import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@components/Button'
import { Container } from '@components/Container/styles'
import { Header } from '@components/Header'
import { Highligh } from '@components/Highlight'
import { Input } from '@components/Input'
import * as S from './styles'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()
  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe um nome para a turma")
      }
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message)
      } else {
        Alert.alert("novo grupo", "Não foi possivel criar um novo grupo")
        console.log(error)
      }
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