import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import { CardBookProps } from '../../components/CardBook';

interface ButtonProps {
  active: boolean;
}

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

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})<ButtonProps>`
  padding: 18px 9px;
  background: ${({theme, active}) => (
    active
      ? theme.colors.primary
      : theme.colors.background
  )};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => (theme.colors.text_dark)};
`;

export const WrapperLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator``;

export const ModalView = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

export const WrapperModal = styled.View`
  padding: 9px 18px;
  background: ${({theme}) => (theme.colors.shape)};
`;

export const HeaderModal = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  align-items: flex-end;
  margin-bottom: 18px;
`;
