import React from 'react';

import { CardBook, CardBookProps } from '../../components/CardBook';

import {
  Container, Header, Title, WrapperFilter, Filter, Search, Label,
  Divider, ListBooks
} from './styles';

export const DashboardScreen = () => {
  const data: CardBookProps[] = [
    {
      "id": "7a908136-1d6d-43f8-933d-01cafae2264f",
      "titulo": "Peter Pan",
      "isbn": "9788525045980",
      "autor": "Monteiro Lobato",
      "editora": "Globinho",
      "ano": 2006
    },
    {
      "id": "55929c68-cfdc-4e9e-8261-0622d411203c",
      "titulo": "A Vingança De Gaia",
      "isbn": "9788598078168",
      "autor": "James Lovelock",
      "editora": "Intrínseca",
      "ano": 2006
    },
    {
      "id": "89b09761-119b-4454-b7f8-07530178de61",
      "titulo": "Diálogo Para o Futuro: As Visões Libertárias de Duas Pensadoras do Quase Impossível",
      "isbn": "9788531609374",
      "autor": "Hazel Henderson",
      "editora": "Cultrix",
      "ano": 2006
    },
    {
      "id": "731b423f-1b52-4207-9e90-077c024a02a8",
      "titulo": "Dois irmãos",
      "isbn": "9788535908336",
      "autor": "Milton Hatoum",
      "editora": "Companhia de Bolso",
      "ano": 2006
    },
    {
      "id": "c726aba0-26f2-40cd-aae2-12e070198153",
      "titulo": "Neve",
      "isbn": "9788535909227",
      "autor": "Orhan Pamuk",
      "editora": "Companhia das Letras",
      "ano": 2006
    },
    {
      "id": "b038934b-7e3a-4267-8ad7-17d1cfd8c7f2",
      "titulo": "Como Conquistar as Pessoas",
      "isbn": "9788575422441",
      "autor": "Allan Pease",
      "editora": "Sextante",
      "ano": 2006
    },
    {
      "id": "50e2c55d-db0c-4792-a67a-21521466ce48",
      "titulo": "Em Busca do \"ser\" Proativo. O Poder dos Intangíveis",
      "isbn": "9788573036350",
      "autor": "Enildo de Oliveira",
      "editora": "QualityMark",
      "ano": 2006
    },
    {
      "id": "00b2b85c-205c-48c0-8ab2-272ade14838d",
      "titulo": "Felpo Filva",
      "isbn": "9788516051822",
      "autor": "Eva Furnari",
      "editora": "Moderna",
      "ano": 2006
    },
    {
      "id": "f48d4225-b2ce-4aee-b844-2835e2639d67",
      "titulo": "A República Velha e a Revolução de 30",
      "isbn": "9788508073177",
      "autor": "Claudio Bertolli Filho",
      "editora": "Ática",
      "ano": 2006
    },
    {
      "id": "b4e302c1-c7d7-403f-a3ff-4681c021ba7d",
      "titulo": "Para Gostar de Ler. Golpe do Aniversariante - Volume 20",
      "isbn": "9788508083268",
      "autor": "Walcyr Carrasco",
      "editora": "Ática",
      "ano": 2006
    }
  ]

  return (
    <Container>
      <Header>
        <Title>987 resultados encontrados</Title>
      </Header>

      <WrapperFilter>
        <Search
          onPress={() => {}}
        >
          <Label>Perquisar</Label>
        </Search>
        <Divider />
        <Filter
          onPress={() => {}}
        >
          <Label>Filtros</Label>
        </Filter>
      </WrapperFilter>

      <ListBooks
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <CardBook data={item} />}
      />
    </Container>
  );
};
