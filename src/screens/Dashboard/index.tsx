import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

import { baseUrl } from '../../services/api';
import { CardBook, CardBookProps } from '../../components/CardBook';
import { Input } from '../../components/Forms/Input';
import { Button as ButtonForm } from '../../components/Forms/Button';

import {
  Container, Header, Title, WrapperFilter, Filter, Search, Label,
  Divider, ListBooks, Footer, Button, Icon, WrapperLoading, Loading,
  ModalView, WrapperModal, HeaderModal
} from './styles';

const maxItens = 7;
const maxLeft = (maxItens - 1) / 2;

export const DashboardScreen = () => {
  const [listBooks, setListBooks] = useState<CardBookProps[]>();
  const [numberResults, setNumberResults] = useState(0);
  const [maxResult, setMaxResult] = useState(10);
  const [skipCount, setSkipCount] = useState(0);
  const [bookName, setBookName] = useState<string>();
  const [bookNameWait, setBookNameWait] = useState<string>();
  const [startingYear, setStartingYear] = useState<number>();
  const [endYear, setEndYear] = useState<number>();
  const [startingYearWait, setStartingYearWait] = useState<number>();
  const [endYearWait, setEndYearWait] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [typeForm, setTypeForm] = useState(0);

  const currentPage = skipCount ? (skipCount/maxResult) + 1 : 1;
  const totalPages = Math.ceil(numberResults/maxResult);
  const firstPage = Math.max(currentPage - maxLeft, 1);

  useEffect(() => {
    const requestBooks = async() => {
      setIsLoading(true);

      let url = `${baseUrl}/Livros?MaxResultCount=${maxResult}&SkipCount=${skipCount}`;

      if(bookName) {
        url = url + `&Busca=${bookName}`
      }

      if(startingYear) {
        url = url + `&AnoInicial=${startingYear}`
      }

      if(endYear) {
        url = url + `&AnoFinal=${endYear}`
      }

      console.log(url);

      try {
        const {data} = await axios.get(`${url}`);

        setListBooks(data.items);
        setNumberResults(data.totalCount);
      } catch(err) {
        Alert.alert('Não consegui localizar os livros :(');
      }

      setIsLoading(false);
    }

    requestBooks();
  }, [skipCount, bookName, startingYear, endYear]);

  const handlePageChange = (page: number) => {
    if(page < 1 || page > totalPages) return;

    setSkipCount((page - 1) * maxResult);
  }

  const handleRemoveFilter = () => {
    setBookName('');
    setStartingYear(0);
    setEndYear(0);
  }

  const showDataModal = () => {
    return (
      <WrapperModal>
        <HeaderModal
          onPress={() => setModalVisible(false)}
        >
          <Icon name='x' />
        </HeaderModal>

        {
          typeForm === 1
            ? <>
                <Input
                  placeholder='Título, Autor ou ISBN'
                  onChangeText={(value) => setBookNameWait(value)}
                />
                <ButtonForm
                  title='Pesquisar'
                  onPress={() => (
                    setBookName(bookNameWait),
                    setSkipCount(0),
                    setModalVisible(false)
                  )}
                />
              </>
            : <>
                <Input
                  placeholder='Ano de início'
                  keyboardType='numeric'
                  onChangeText={(value) => setStartingYearWait(parseInt(value))}
                />
                <Input
                  placeholder='Ano final'
                  keyboardType='numeric'
                  onChangeText={(value) => setEndYearWait(parseInt(value))}
                />

                <ButtonForm
                  title='Pesquisar'
                  onPress={() => (
                    setStartingYear(startingYearWait),
                    setEndYear(endYearWait),
                    setSkipCount(0),
                    setModalVisible(false)
                  )}
                />
              </>
        }
      </WrapperModal>
    );
  }

  return (
    <Container>
      <Header>
        <Title>{numberResults} resultados encontrados</Title>
      </Header>

      <WrapperFilter>
        <Search
          onPress={() => (
            setModalVisible(true),
            setTypeForm(1)
          )}
        >
          <Label>Pesquisar</Label>
        </Search>
        <Divider />
        <Filter
          onPress={() => (
            setModalVisible(true),
            setTypeForm(2)
          )}
        >
          <Label>Filtrar</Label>
        </Filter>
        <Divider />
        <Filter
          onPress={() => handleRemoveFilter()}
        >
          <Label>Limpar</Label>
        </Filter>
      </WrapperFilter>

      {
        isLoading
          ? <WrapperLoading>
              <Loading size="large" color={'#FFDB01'} />
            </WrapperLoading>
          : <ListBooks
              data={listBooks}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => <CardBook data={item} />}
            />
      }

      <Footer>
        <Button
          active={false}
          onPress={() => handlePageChange(currentPage - 1)}
        >
          <Icon name='chevron-left' />
        </Button>
        {
          Array.from({ length: Math.min(maxItens, totalPages) })
            .map((_, index) => index + firstPage)
            .map((page, index) => (
              <Button
                key={index}
                active={page === currentPage}
                onPress={() => handlePageChange(page)}
              >
                <Label>{page}</Label>
              </Button>
            )
          )
        }
        <Button
          active={false}
          onPress={() => handlePageChange(currentPage + 1)}
        >
          <Icon name='chevron-right' />
        </Button>
      </Footer>

      <ModalView
        isVisible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
      >
        {showDataModal()}
      </ModalView>
    </Container>
  );
};
