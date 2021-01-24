const express = require("express");
const router = express.Router();
const hpData = {
  _id: "5a12292a0f5ae10021650d7e",
  name: "Harry Potter",
  role: "student",
  house: "Gryffindor",
  school: "Hogwarts School of Witchcraft and Wizardry",
  alias: "The Boy Who Lived",
  wand: 'Holly, 11", phoenix feather',
  boggart: "dementor",
  patronus: "stag",
  image:
    "https://www.pngitem.com/pimgs/m/13-135859_harry-potter-hd-png-download.png",
};

router.get("/api", (req, res, next) => {
  res.send(JSON.stringify(hpData));
});

module.exports = router;