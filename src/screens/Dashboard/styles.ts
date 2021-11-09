import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { CardBookProps } from '../../components/CardBook';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => (theme.colors.background)};
`;

export const Header = styled.View`
  width: 100%;
  background: ${({theme}) => (theme.colors.primary)};
  padding: 18px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => (theme.fonts.medium)};
  color: ${({theme}) => (theme.colors.text)};
  margin-top: ${getBottomSpace() + RFValue(27)}px;
`;

export const WrapperFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1.5px;
  border-style: solid;
  border-color: ${({theme}) => (theme.colors.background)};
`;

export const Filter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => (theme.colors.shape)};
  padding: 18px 0;
`;

export const Search = styled(Filter)``;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => (theme.fonts.medium)};
  color: ${({theme}) => (theme.colors.text_dark)};
`;

export const Divider = styled.View`
  background: ${({theme}) => (theme.colors.background)};
  width: 1.5px;
  height: 100%;
`;

export const ListBooks = styled(
  FlatList as new () => FlatList<CardBookProps>
).attrs({
  showsVerticalScrollIndicator: false
})`
  padding-top: 18px;
`;
