import { ButtonIcon } from "@components/ButtonIcon";
import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { Highligh } from "@components/Highlight";
import { Input } from "@components/Input";
import * as S from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highligh
        title="Nome da Turma"
        subTitle="Adcione a galera e separe os times"
      />
      <S.Form>

        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" />
      </S.Form>
    </Container>
  )
}