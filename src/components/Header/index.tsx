import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import logoImg from '@assets/logo.png'
import * as S from "./styles";

type PropsHeader = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: PropsHeader) {
  const navigation = useNavigation()
  function handleGoBackHome() {
    navigation.navigate('groups')
  }
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
      <TouchableOpacity onPress={handleGoBackHome}>
        <S.Logo source={logoImg} />
      </TouchableOpacity>
    </S.ContainerHeader>
  )

}