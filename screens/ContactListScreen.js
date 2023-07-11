import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addContact,toggleFavorite } from '../redux/actions';

const ContactListScreen = ({ navigation, contacts, addContact, toggleFavorite }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    filterContacts();
  }, [searchQuery, contacts]);

  const filterContacts = () => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  return (
    <View>
      <Text>Contact List</Text>
      <TextInput
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
      {filteredContacts.map((contact) => (
        <Text key={contact.id}>{contact.name}</Text>
      ))}
      <Button title="Add" onPress={() => navigation.navigate('CreateContact')} />
      <Button
        title="Toggle Favorite"
        onPress={() => {
          const contactId = filteredContacts[0]?.id; // Example: Toggle favorite for the first contact
          if (contactId) {
            toggleFavorite(contactId);
          }
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

export default connect(mapStateToProps, { addContact, toggleFavorite })(ContactListScreen);
