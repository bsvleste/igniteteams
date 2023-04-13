import { BackButton, BackIcon, ContainerHeader, Logo } from "./styles";
import logoImg from '@assets/logo.png'

type PropsHeader = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: PropsHeader) {
  return (
    <ContainerHeader>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </ContainerHeader>
  )

}