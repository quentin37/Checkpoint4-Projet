const express = require("express");

const {
  ItemController,
  MailController,
  AllProjectController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/sendEmail", MailController.sendMail);
router.get("/allProject", AllProjectController.browse);
router.get("/project/:id", AllProjectController.read);

module.exports = router;
