const { validateBody } = require("../middlewares/validateBody");
const { isValidId } = require("../middlewares/isValidId");
const { validateBodyStatus } = require("../middlewares/validateBodyStatus");

module.exports = {
  validateBody,
  isValidId,
  validateBodyStatus,
};
