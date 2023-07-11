import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';

import ContactListScreen from './screens/ContactListScreen';
import UpdateContactScreen from './screens/UpdateContactScreen';
import CreateContactScreen from './screens/CreateContactScreen';
import FavoriteContactListScreen from './screens/FavoriteContactListScreen';

import { Provider } from 'react-redux';
import store from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactList">
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


