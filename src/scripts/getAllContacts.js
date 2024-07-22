import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const getAllContacts = async () => {
  if (fs.existsSync(PATH_DB)) {
    try {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Помилка читання або парсингу файлу db.json:', error);
      return;
    }
  }
};

console.log(await getAllContacts());
