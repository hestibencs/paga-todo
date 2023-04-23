import React from 'react';
import { render, screen } from '@testing-library/react-native';
import BankCard from './BankCard';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Bank } from 'PagaTodo/@types/api';

test('render correctly', () => {
  const bank: Bank = {
    description: 'Banco Paga Todo es Para Todos',
    age: 10,
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
    bankName: 'Paga Todo',
  };

  const component = (
    <Provider store={store}>
      <BankCard item={bank} />
    </Provider>
  );

  render(component);

  const name = screen.getByTestId('bank-name');
  const description = screen.getByTestId('bank-description');
  const age = screen.getByTestId('bank-age');
  const img = screen.getByTestId('bank-img');

  expect(name.props.children).toBe(bank.bankName);
  expect(description.props.children).toBe(bank.description);
  expect(age.props.children).toBe(bank.age);
  expect(img.props.resizeMode).toBe('contain');
});
