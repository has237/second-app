import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addContact } from '../redux/actions';

const CreateContactScreen = ({ navigation, addContact }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [landlineNumber, setLandlineNumber] = useState('');

  const saveContact = () => {
    const newContact = {
      id: Date.now(),
      name,
      mobileNumber,
      landlineNumber,
    };

    addContact(newContact);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add New Contact</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <TextInput
        placeholder="Landline Number"
        value={landlineNumber}
        onChangeText={setLandlineNumber}
      />
      <Button title="Save" onPress={saveContact} />
    </View>
  );
};

export default connect(null, { addContact })(CreateContactScreen);
