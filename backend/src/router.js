const express = require("express");

const {
  ProfilController,
  MailController,
  AllProjectController,
} = require("./controllers");

const router = express.Router();

router.get("profil", ProfilController.read);
router.put("profil", ProfilController.edit);

router.post("/sendEmail", MailController.sendMail);

router.post("/Project", AllProjectController.add);
router.put("/Project", AllProjectController.edit);
router.delete("/Project/:id", AllProjectController.delete);
router.get("/Project", AllProjectController.browse);
router.get("/project/:id", AllProjectController.read);

module.exports = router;
