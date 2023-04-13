import { ContainerHighlight, SubTitle, Title } from "./styles";

interface HighlightProps {
  title: string
  subTitle: string
}

export function Highligh({ title, subTitle }: HighlightProps) {
  return (
    <ContainerHighlight>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </ContainerHighlight>
  )
}