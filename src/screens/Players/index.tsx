import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, Alert } from 'react-native'
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
import * as S from "./styles";
import { PlayerStorageDTO } from '@storage/players/playerStorageDTO';

type RouteParamProps = {
  group: string
}

export function Players() {
  const route = useRoute()
  const { group } = route.params as RouteParamProps
  const [team, setTeam] = useState('time a');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')
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
      const playersByTeam = await playerGetByGrouAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo player', error.message)
      } else {
        console.log(error)
        Alert.alert('Novo player', "Não foi possivel cadastar o player, tente novamente")
      }
    }
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
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
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
      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name}
            onRemove={() => { }}
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
      <Button title='Remover Turma' type='SECONDARY' />

    </Container>
  )
}