import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import { RootStackParamList } from '../../routes/stack.routes';

import {
  Container, WrapperBook, Title, Label, Icon
} from './styles';

export interface CardBookProps {
  id: string;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  ano: number;
}

interface Props {
  data: CardBookProps;
}

type BookDetailScreen = StackNavigationProp<RootStackParamList, 'BookDetailScreen'>;

export const CardBook = ({ data }: Props) => {
  const navigation = useNavigation<BookDetailScreen>();

  const handleDetailBook = (id: string) => {
    navigation.navigate('BookDetailScreen', { id });
  }

  return (
    <Container
      onPress={() => handleDetailBook(data.id)}
    >
      <WrapperBook>
        <Title>{data.titulo}</Title>

        <Label>ISBN: {data.isbn} / Ano: {data.ano}</Label>
        <Label>Autor: {data.autor}</Label>
        <Label>Editora: {data.editora}</Label>
      </WrapperBook>
      <Icon name='chevron-right' />
    </Container>
  );
};
