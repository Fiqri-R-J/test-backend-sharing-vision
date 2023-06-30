var express = require("express");
var router = express.Router();
const { validateCreate, validateUpdate } = require("../middleware/validator");
const postController = require("../controller/posts");

//GET Article
router.get("/", postController.getPost);

//GET Article id
router.get("/:id", postController.getPostId);

//POST Article
router.post("/", validateCreate, postController.createPost);

//EDIT Article
router.put("/:id", validateUpdate, postController.editPost);

//Delete Article
router.delete("/:id", postController.deleteData);

module.exports = router;
