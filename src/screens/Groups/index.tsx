import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highligh } from '@components/Highlight';
import * as S from './styles';

export function Group() {
  return (
    <S.ContainerGroup>
      <Header />
      <Highligh title='Turmas' subTitle='jogue com seus amigos' />
      <GroupCard title="Jogue com seus amigos" />
    </S.ContainerGroup>
  );
}


