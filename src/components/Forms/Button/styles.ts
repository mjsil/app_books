import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background: ${({theme}) => (theme.colors.primary)};
  border-radius: 5px;
  align-items: center;
  padding: 9px 18px;
  margin: 9px 0 18px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => (theme.fonts.medium)};
  color: ${({theme}) => (theme.colors.text_dark)};
`;
