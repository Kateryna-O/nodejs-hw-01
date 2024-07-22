//import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  const allContacts = await getAllContacts();
  return `count: ${allContacts.length}`;
};

console.log(await countContacts());
