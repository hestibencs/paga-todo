import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Home } from '../screens';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={[styles.fill, styles.background]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  background: {
    backgroundColor: '#EFEFEF',
  },
});

export default ApplicationNavigator;
