import { ContainerHeader, Logo } from "./styles";
import logoImg from '@assets/logo.png'
export function Header() {
  return (
    <ContainerHeader>
      <Logo source={logoImg} />
    </ContainerHeader>
  )

}