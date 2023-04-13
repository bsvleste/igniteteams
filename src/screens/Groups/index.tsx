import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highligh } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useState } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';

export function Group() {
  const [groups, setGroups] = useState<string[]>([])
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
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Sua lista esta vazia adicione seus amigos na lista" />}
      />
    </S.ContainerGroup>
  );
}


