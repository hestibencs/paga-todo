import React from 'react';
import { render, screen } from '@testing-library/react-native';
import BankList from './BankList';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Bank } from 'PagaTodo/@types/api';
import BankCard from '../BankCard/BankCard';

test('render correctly', () => {
  const data: Bank[] = [
    {
      description: 'Banco Paga Todo es Para Todos',
      age: 10,
      url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
      bankName: 'Paga Todo',
    },
    {
      description: 'BBVA Bancomer Creando Oportunidades',
      bankName: 'BBVA Bancomer',
      age: 11,
      url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-bbva.jpeg?alt=media&token=435ed70e-061b-4a80-a216-c69cea04f068',
    },
  ];

  const component = (
    <Provider store={store}>
      <BankList data={data} />
    </Provider>
  );

  render(component);

  const wrapper = screen.getByTestId('bankList-wrapper');

  expect(wrapper.findAllByType(BankCard).length).toEqual(2);
});
