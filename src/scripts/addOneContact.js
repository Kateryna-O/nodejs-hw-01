import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs';

export const addOneContact = async () => {
  let contacts = [];
  if (fs.existsSync(PATH_DB)) {
    try {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      console.error(error);
      return;
    }
  }
  const newContact = createFakeContact();
  contacts.push(newContact);
  try {
    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
