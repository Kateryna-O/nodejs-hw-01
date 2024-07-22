import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs';

const generateContacts = async (number) => {
  let contacts = [];
  if (fs.existsSync(PATH_DB)) {
    try {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      console.error('Помилка читання або парсингу файлу db.json:', error);
      return;
    }
  }
  const newContacts = Array.from({ length: number }, createFakeContact);
  contacts = contacts.concat(newContacts);
  try {
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Помилка запису файлу db.json:', error);
  }
};

generateContacts(5);
