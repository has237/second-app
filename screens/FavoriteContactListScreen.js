import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { toggleFavorite } from '../redux/actions';

const FavoriteContactListScreen = ({ favoriteContacts, toggleFavorite }) => {
  return (
    <View>
      <Text>Favorite Contact List</Text>
      {favoriteContacts.map((contact) => (
        <Text key={contact.id}>{contact.name}</Text>
      ))}
      <Button
        title="Toggle Favorite"
        onPress={() => {
          const contactId = favoriteContacts[0]?.id; // Example: Toggle favorite for the first favorite contact
          if (contactId) {
            toggleFavorite(contactId);
          }
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  favoriteContacts: state.contact.contacts.filter((contact) => contact.isFavorite),
});

export default connect(mapStateToProps, { toggleFavorite })(FavoriteContactListScreen);
