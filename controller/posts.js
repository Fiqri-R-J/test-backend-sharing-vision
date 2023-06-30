const models = require("../models/index");

//get Data
exports.getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { pages, limit } = req.query;

    if (id) {
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
    } else {
      let allPosts;

      if (limit && pages) {
        allPosts = await models.posts.findAll({ limit: limit, offset: pages });
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
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
    console.log(error);
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
    const { title, content, category, status } = req.body;

    const post = models.posts.update(
      {
        title,
        content,
        category,
        status,
      },
      { where: { id: id } }
    );
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
