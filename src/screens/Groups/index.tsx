import { Header } from '@components/Header';
import { Highligh } from '@components/Highlight';
import { ContainerGroup, Titulo } from './styles';

export function Group() {
  return (
    <ContainerGroup>
      <Header />
      <Highligh title='Turmas' subTitle='jogue com seus amigos' />
    </ContainerGroup>
  );
}


