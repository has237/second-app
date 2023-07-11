import AsyncStorage from '@react-native-async-storage/async-storage';

export const addContact = (contact) => {
  return async (dispatch) => {
    try {
      // Get existing contacts from the local database
      const existingContactsJSON = await AsyncStorage.getItem('contacts');
      const existingContacts = existingContactsJSON ? JSON.parse(existingContactsJSON) : [];

      // Generate a unique ID for the new contact
      const newContact = { ...contact, id: Date.now() };

      // Update the contacts array
      const updatedContacts = [...existingContacts, newContact];

      // Save the updated contacts array to the local database
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // Dispatch the action to update Redux store
      dispatch({ type: 'ADD_CONTACT', payload: newContact });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };
};

export const updateContact = (contact) => {
  return async (dispatch) => {
    try {
      // Get existing contacts from the local database
      const existingContactsJSON = await AsyncStorage.getItem('contacts');
      const existingContacts = existingContactsJSON ? JSON.parse(existingContactsJSON) : [];

      // Update the contacts array
      const updatedContacts = existingContacts.map((c) =>
        c.id === contact.id ? { ...contact } : c
      );

      // Save the updated contacts array to the local database
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // Dispatch the action to update Redux store
      dispatch({ type: 'UPDATE_CONTACT', payload: contact });
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };
};

export const deleteContact = (contactId) => {
  return async (dispatch) => {
    try {
      // Get existing contacts from the local database
      const existingContactsJSON = await AsyncStorage.getItem('contacts');
      const existingContacts = existingContactsJSON ? JSON.parse(existingContactsJSON) : [];

      // Filter out the contact to be deleted
      const updatedContacts = existingContacts.filter((c) => c.id !== contactId);

      // Save the updated contacts array to the local database
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // Dispatch the action to update Redux store
      dispatch({ type: 'DELETE_CONTACT', payload: contactId });
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };
};

export const toggleFavorite = (contactId) => {
  return async (dispatch) => {
    try {
      // Get existing contacts from the local database
      const existingContactsJSON = await AsyncStorage.getItem('contacts');
      const existingContacts = existingContactsJSON ? JSON.parse(existingContactsJSON) : [];

      // Update the contacts array
      const updatedContacts = existingContacts.map((c) =>
        c.id === contactId ? { ...c, isFavorite: !c.isFavorite } : c
      );

      // Save the updated contacts array to the local database
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // Dispatch the action to update Redux store
      dispatch({ type: 'TOGGLE_FAVORITE', payload: contactId });
    } catch (error) {
      console.error('Error toggling favorite status:', error);
    }
  };
};
