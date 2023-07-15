const express = require("express");

const router = express.Router();

const contacts = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
});

// router.get("/:contactId", async (req, res, next) => {
//   const {id} = req.params;
//   const result = await contacts.getContactById(id);
//   res.json(result);
// });

// router.post("/", async (req, res, next) => {
//   const result = await contacts.addContact();
//   res.json(result);
// });

// router.delete("/:contactId", async (req, res, next) => {
//   const {id} = req.params;
//   const result = await contacts.removeContact(id);
//   res.json(result);
// });

// router.put("/:contactId", async (req, res, next) => {
//   const {id} = req.params;
//   const result = await contacts.updateContact(id);
//   res.json(result);
// });

module.exports = router;
