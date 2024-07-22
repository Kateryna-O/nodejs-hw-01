import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const removeAllContacts = async () => {
  if (fs.existsSync(PATH_DB)) {
    try {
      fs.writeFileSync(PATH_DB, JSON.stringify([]), 'utf-8');
      console.log('Усі контакти було видалено.');
    } catch (error) {
      console.error('Помилка запису у файл db.json:', error);
    }
  } else {
    console.error(`Файл ${PATH_DB} не знайдено.`);
  }
};

removeAllContacts();
