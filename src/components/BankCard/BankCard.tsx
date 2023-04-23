import { Bank } from 'PagaTodo/@types/api';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  item?: Bank;
};

const BankCard = ({ item }: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.leftContent}>
        <Image
          testID={'bank-img'}
          source={{
            uri: item?.url,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.centerContent}>
        <Text testID={'bank-name'}>{item?.bankName}</Text>
        <Text testID={'bank-description'}>{item?.description}</Text>
      </View>
      <View style={styles.rightContent}>
        <Text testID={'bank-age'}>{item?.age}</Text>
        <Text>{'years'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  leftContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    flex: 8,
    justifyContent: 'center',
  },
  rightContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
  },
});

BankCard.defaultProps = {
  item: null,
};

export default BankCard;
