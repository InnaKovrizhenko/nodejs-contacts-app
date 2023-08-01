const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { isValidId } = require("../../middlewares");
const { validateBodyStatus } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.remove);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.update
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBodyStatus(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
