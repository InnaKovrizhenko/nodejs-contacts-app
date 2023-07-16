const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "./contacts.json");

// Функція, яка повертає масив контактів.
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Функція, яка повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
const getContactById = async (contactId) => {
  try {
    const allContacts = await listContacts();
    const contactById = allContacts.find((item) => item.id === contactId);
    if (!contactById) {
      return null;
    }
    return contactById;
  } catch (error) {
    console.log(error);
  }
};

// Функція, яка повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
const removeContact = async (contactId) => {
  try {
    const allContacts = await listContacts();

    const index = allContacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = allContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Функція, яка повертає об'єкт доданого контакту.
const addContact = async (name, email, phone) => {
  try {
    const allContacts = await listContacts();
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

// Функція, яка повертає оновлений об'єкт доданого контакту.
const updateContact = async (contactId, body) => {
  try {
    const allContacts = await listContacts();
    const index = allContacts.findIndex((el) => el.id === contactId);
    if (index === -1) {
      return null;
    }
    allContacts[index] = { contactId, ...body };
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return allContacts[index];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
