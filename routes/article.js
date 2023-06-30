var express = require("express");
var router = express.Router();
const postController = require("../controller/posts");

//GET Article
router.get("/:id?", postController.getPost);

//POST Article
router.post("/", postController.createPost);

//EDIT Article
router.put("/:id", postController.editPost);

//Delete Article
router.delete("/:id", postController.deleteData);

module.exports = router;
