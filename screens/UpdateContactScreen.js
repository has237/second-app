import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateContact, deleteContact, toggleFavorite } from '../redux/actions';

const UpdateContactScreen = ({
  navigation,
  contact,
  updateContact,
  deleteContact,
  toggleFavorite,
}) => {
  const handleUpdate = () => {
    updateContact(contact);
  };

  const handleDelete = () => {
    deleteContact(contact.id);
    navigation.goBack();
  };

  const handleToggleFavorite = () => {
    toggleFavorite(contact.id);
  };

  return (
    <View>
      <Text>Update Contact</Text>
      <Text>{contact.name}</Text>
      {/* Display other contact fields */}
      <Button title="Update" onPress={handleUpdate} />
      <Button title="Delete" onPress={handleDelete} />
      <Button
        title={contact.isFavorite ? 'Unmark Favorite' : 'Mark Favorite'}
        onPress={handleToggleFavorite}
      />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  contact: state.contact.contacts.find((contact) => contact.id === ownProps.route.params.contactId),
});

export default connect(mapStateToProps, { updateContact, deleteContact, toggleFavorite })(UpdateContactScreen);
