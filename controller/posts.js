const models = require("../models/index");

//get Data
exports.getPost = async (req, res) => {
  try {
    const { page, limit } = req.query;

    if (page && limit) {
      allPosts = await models.post.query(`SELECT * FROM post ORDER BY id 
      LIMIT ${limit} OFFSET ${limit * (page - 1)} `);
      console.log(allPosts);
    } else {
      allPosts = await models.posts.findAll({});
    }

    if (allPosts.length !== 0) {
      res.status(200).json({
        status: "ok",
        messages: "Data berhasil diambil",
        total: allPosts.length,
        data: allPosts,
      });
    } else {
      res.status(204).json({
        status: "ok",
        message: "Data tidak ada",
        data: {},
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
    console.log(error);
  }
};
exports.getPostId = async (req, res) => {
  try {
    const { id } = req.params;
    const postById = await models.posts.findByPk(id);
    if (postById) {
      res.status(200).json({
        status: "ok",
        messages: "data found",
        data: postById,
      });
    } else {
      res.status(400).json({
        status: "not found",
        messages: "Data not found",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

//create Data
exports.createPost = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      status: req.body.status,
    };

    const post = await models.posts.create(data);
    if (post) {
      res.status(201).json({
        status: "Ok",
        messages: "Data berhasil ditambah",
        data: post,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Error",
      messages: "Error please try again or wait few time",
    });
  }
};

//edit Data
exports.editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      status: req.body.status,
    };
    console.log(data);

    const post = models.posts.update(data, { where: { id: id } });
    if (post) {
      res.status(200).json({
        status: "ok",
        messages: "Data succesfuly edited",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Error",
      messages: "Error please try again or wait few time",
    });
  }
};

//delete Data
exports.deleteData = async (req, res) => {
  try {
    const { id } = req.params;

    const post = models.posts.destroy({ where: { id: id } });
    if (post) {
      res.status(200).json({
        status: "ok",
        messages: "data succesfuly delete",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Error",
      messages: "error",
    });
  }
};
