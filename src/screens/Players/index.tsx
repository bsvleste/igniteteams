import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native'
import { ButtonIcon } from "@components/ButtonIcon";
import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { Highligh } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import * as S from "./styles";

type RouteParamProps = {
  group: string
}

export function Players() {
  const route = useRoute()
  const { group } = route.params as RouteParamProps
  const [team, setTeam] = useState('time a');
  const [players, setPlayers] = useState([])
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
        />
        <ButtonIcon icon="add" />
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
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item}
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