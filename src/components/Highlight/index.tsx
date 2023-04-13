import * as S from "./styles";

interface HighlightProps {
  title: string
  subTitle: string
}

export function Highligh({ title, subTitle }: HighlightProps) {
  return (
    <S.ContainerHighlight>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.ContainerHighlight>
  )
}