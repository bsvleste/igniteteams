import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highligh } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { FlatList } from 'react-native';
import { groupGetAll } from '@storage/group/gropuGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()
  function handleNewGroup() {
    navigation.navigate('new')
  }
  async function fecthGroups() {
    try {
      const data = await groupGetAll();
      setGroups(data)
    } catch (error) {
      throw error
    }
  }
  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group })
  }
  useFocusEffect(useCallback(() => {
    fecthGroups()
  }, []))
  return (
    <Container>
      <Header />
      <Highligh title='Turmas' subTitle='jogue com seus amigos' />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Sua lista esta vazia adicione seus amigos na lista" />}
      />
      <Button title="Criar Times" onPress={handleNewGroup} />
    </Container>
  );
}


