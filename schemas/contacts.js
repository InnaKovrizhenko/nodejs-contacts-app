const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "any.required": "missing required email field",
    }),
  phone: Joi.number()
    .integer()
    .required()
    .messages({
      "number.base": 'The "phone" field must be a number',
      "number.integer": "The phone field must be an integer.",
      "any.required": "missing required phone field",
    })
    .custom((value, helpers) => {
      const phoneNumberRegex = /^\d{7}$/;
      if (!phoneNumberRegex.test(value)) {
        return helpers.message(
          'The "phone" field must be in the format of a phone number and contain at least 7 characters'
        );
      }
    }),
});

module.exports = {
  addSchema,
};
