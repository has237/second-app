import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactListScreen from './src/screens/ContactListScreen';
import CreateContactScreen from './src/screens/CreateContactScreen';
import UpdateContactScreen from './src/screens/UpdateContactScreen';
import FavoriteContactListScreen from './src/screens/FavoriteContactListScreen';

import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
        <Stack.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Contact List' }} />
        <Stack.Screen name="CreateContact" component={CreateContactScreen} options={{ title: 'Add New Contact' }} />
        <Stack.Screen name="UpdateContact" component={UpdateContactScreen} options={{ title: 'Update Contact' }} />
        <Stack.Screen name="FavoriteContactList" component={FavoriteContactListScreen} options={{ title: 'Favorite Contact List' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


