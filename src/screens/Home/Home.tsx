import { BankList } from 'PagaTodo/src/components';
import { useGetAllBanksQuery } from 'PagaTodo/src/services/api';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Home = () => {
  const { data, isLoading } = useGetAllBanksQuery();

  return (
    <View style={styles.fill}>
      {isLoading && (
        <View style={[styles.fill, styles.colCenter]}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {!isLoading && <BankList data={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
