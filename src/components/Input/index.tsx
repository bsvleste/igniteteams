import { TextInputProps, TextInput } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as S from './styles'
import React from 'react'
type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}
export function Input({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme()
  return (
    <S.ContainerTextInput
      ref={inputRef}
      {...rest}
      placeholderTextColor={COLORS.GRAY_300}
    />
  )
}