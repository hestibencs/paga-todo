import { Bank } from 'PagaTodo/@types/api';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BankCard from '../BankCard/BankCard';

type Props = {
  data?: Bank[];
};

const BankList = ({ data }: Props) => {
  return (
    <View testID={'bankList-wrapper'} style={styles.container}>
      {data?.map((item, index) => (
        <BankCard key={index} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

BankList.defaultProps = {
  data: [],
};

export default BankList;
