import AsyncStorage from '@react-native-async-storage/async-storage';

const CONTACTS_STORAGE_KEY = 'contacts';

const saveContacts = async (contacts) => {
  try {
    const contactsJSON = JSON.stringify(contacts);
    await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, contactsJSON);
  } catch (error) {
    console.error('Error saving contacts to AsyncStorage:', error);
  }
};

const loadContacts = async () => {
  try {
    const contactsJSON = await AsyncStorage.getItem(CONTACTS_STORAGE_KEY);
    return contactsJSON != null ? JSON.parse(contactsJSON) : [];
  } catch (error) {
    console.error('Error loading contacts from AsyncStorage:', error);
    return [];
  }
};

export const addContact = async (contact) => {
  try {
    const contacts = await loadContacts();
    const updatedContacts = [...contacts, contact];
    await saveContacts(updatedContacts);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

export const updateContact = async (contact) => {
  try {
    const contacts = await loadContacts();
    const updatedContacts = contacts.map((c) => (c.id === contact.id ? contact : c));
    await saveContacts(updatedContacts);
  } catch (error) {
    console.error('Error updating contact:', error);
  }
};

export const deleteContact = async (contactId) => {
  try {
    const contacts = await loadContacts();
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    await saveContacts(updatedContacts);
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};

export const toggleFavorite = async (contactId) => {
  try {
    const contacts = await loadContacts();
    const updatedContacts = contacts.map((c) =>
      c.id === contactId ? { ...c, isFavorite: !c.isFavorite } : c
    );
    await saveContacts(updatedContacts);
  } catch (error) {
    console.error('Error toggling favorite status:', error);
  }
};
