import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highligh } from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';

export function Group() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocketseat', "nova turma"])
  return (
    <S.ContainerGroup>
      <Header />
      <Highligh title='Turmas' subTitle='jogue com seus amigos' />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />
    </S.ContainerGroup>
  );
}


