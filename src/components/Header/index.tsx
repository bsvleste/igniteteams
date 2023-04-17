import { useNavigation } from '@react-navigation/native'
import * as S from "./styles";
import logoImg from '@assets/logo.png'

type PropsHeader = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: PropsHeader) {
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <S.ContainerHeader>
      {
        showBackButton &&
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      }
      <S.Logo source={logoImg} />
    </S.ContainerHeader>
  )

}