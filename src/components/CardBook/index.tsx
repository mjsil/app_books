import React from 'react';

import {
  Container, Wrapper, Title, Label, Icon
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

export const CardBook = ({ data }: Props) => {
  return (
    <Container>
      <Wrapper>
        <Title>{data.titulo}</Title>

        <Label>ISBN: {data.isbn} / Ano: {data.ano}</Label>
        <Label>Autor: {data.autor}</Label>
        <Label>Editora: {data.editora}</Label>
      </Wrapper>
      <Icon name='chevron-right' />
    </Container>
  );
};
