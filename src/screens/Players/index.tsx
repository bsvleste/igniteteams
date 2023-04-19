import { useState, useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Alert, TextInput, Keyboard } from 'react-native'
import { ButtonIcon } from "@components/ButtonIcon";
import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { Highligh } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/players/playerAddByGroup';
import { playerGetByGrouAndTeam } from '@storage/players/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/players/playerStorageDTO';
import { playerRemoveByGroup } from '@storage/players/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import * as S from "./styles";
import { Loading } from '@components/Loading';

type RouteParamProps = {
  group: string
}

export function Players() {
  const navigation = useNavigation()
  const newPlayerNameInputRef = useRef<TextInput>(null)
  const route = useRoute()
  const { group } = route.params as RouteParamProps
  const [team, setTeam] = useState('time a');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Novo player", "Informe o nome do novo player")
    }
    const newPlayer = {
      name: newPlayerName,
      team
    }
    try {
      await playerAddByGroup(newPlayer, group)
      fetchPlayersByTeam()
      setNewPlayerName('')
      newPlayerNameInputRef.current?.blur()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo player', error.message)
      } else {
        console.log(error)
        Alert.alert('Novo player', "Não foi possivel cadastar o player, tente novamente")
      }
    }
  }
  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await playerGetByGrouAndTeam(group, team)
      setPlayers(playersByTeam)

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo player', error.message)
      } else {
        console.log(error)
        Alert.alert('Novo player', "Não foi possivel cadastar o player, tente novamente")
      }
    } finally {
      setIsLoading(false)
    }
  }
  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (error) {
      Alert.alert("Remover Player", "Não foi possivel remover o player")
    }
  }
  async function handleGroup() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    } catch (error) {
      Alert.alert("Não foi possivel remover o grupo")
    }
  }
  async function handleRemoveGroup() {
    Alert.alert(
      "Remover o grupo",
      "Deseja Remover o grupo?",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => handleGroup() }
      ]
    )
  }
  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])
  return (
    <Container>
      <Header showBackButton />
      <Highligh
        title={group}
        subTitle="Adcione a galera e separe os times"
      />
      <S.Form>
        <Input
          inputRef={newPlayerNameInputRef}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={['time a', ' time b']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>
      {
        isLoading ? <Loading /> :
          <FlatList
            data={players}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <PlayerCard name={item.name}
                onRemove={() => { handleRemovePlayer(item.name) }}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              [
                { paddingBottom: 100 },
                players.length === 0 && { flex: 1 }
              ]
            }
            ListEmptyComponent={<ListEmpty message="Não ha pessoas nesse time" />}

          />

      }

      <Button title='Remover Turma' type='SECONDARY' onPress={handleRemoveGroup} />

    </Container>
  )
}