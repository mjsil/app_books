import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) => (theme.colors.shape)};
  padding: 9px 18px;
  margin-bottom: 9px;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => (theme.fonts.medium)};
  margin-bottom: 9px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => (theme.fonts.regular)};
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => (theme.colors.background)};
  font-size: ${RFValue(24)}px;
  margin-left: 9px;
`;
