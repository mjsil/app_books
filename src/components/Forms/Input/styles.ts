import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  color: ${({theme}) => (theme.colors.text_dark)};
  width: 100%;
  padding: 18px;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => (theme.fonts.regular)};
  background: ${({theme}) => theme.colors.background};
  margin-bottom: 8px;
  border-radius: 5px;
`;
