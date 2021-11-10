import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

import { CardBookProps } from '../../components/CardBook';
import { baseUrl } from '../../services/api';

import {
  Container, Header, WrapperIcon, Icon, WrapperBook, Title, WrapperLabel,
  Label
} from './styles';

interface Params {
  id: string;
}

interface BookDetail extends CardBookProps {
  idioma: string;
  peso: number;
  comprimento: number;
  largura: number;
  altura: number;
}

export const BookDetailScreen = () => {
  const [book, setBook] = useState<BookDetail>();
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as Params;

  useEffect(() => {
    const requestBook = async() => {
      try {
        const {data} = await axios.get(`${baseUrl}/Livros/${id}`);

        setBook(data);
      } catch(err) {
        Alert.alert('Não consegui localizar o livro :(');
      }
    }

    requestBook();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <WrapperIcon
          onPress={() => handleBack()}
        >
          <Icon name='arrow-left' />
        </WrapperIcon>
      </Header>

      <WrapperBook>
        <Title>{book?.titulo}</Title>

        <WrapperLabel>
          <Label>ISBN: {book?.isbn}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Ano: {book?.ano}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Autor: {book?.autor}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Editora: {book?.editora}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Idioma: {book?.idioma}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Peso: {book?.peso}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Comprimento: {book?.comprimento}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Largura: {book?.largura}</Label>
        </WrapperLabel>

        <WrapperLabel>
          <Label>Altura: {book?.altura}</Label>
        </WrapperLabel>
      </WrapperBook>
    </Container>
  );
};
