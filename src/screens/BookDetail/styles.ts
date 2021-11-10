import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => (theme.colors.background)};
`;

export const Header = styled.View`
  width: 100%;
  background: ${({theme}) => (theme.colors.primary)};
  padding: 18px;
`;

export const WrapperIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 40px;
  margin-top: ${getBottomSpace() + RFValue(27)}px;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => (theme.colors.shape)};
  font-size: ${RFValue(24)}px;
`;

export const WrapperBook = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => (theme.fonts.medium)};
  padding: 18px;
  text-align: center;
`;

export const WrapperLabel = styled.View`
  background: ${({theme}) => (theme.colors.shape)};
  padding: 9px 18px;
  margin-bottom: 9px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => (theme.fonts.regular)};
`;
