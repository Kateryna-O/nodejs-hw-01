import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const removeLastContact = async () => {
  if (fs.existsSync(PATH_DB)) {
    try {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      const contacts = JSON.parse(data);

      if (contacts.length > 0) {
        contacts.pop();
        fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log('Останній контакт було видалено.');
      } else {
        console.log('Масив контактів порожній.');
      }
    } catch (error) {
      console.error(error);
    }
  }
};

removeLastContact();
