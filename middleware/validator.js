const { Validator, addCustomMessages } = require("node-input-validator");

exports.validateCreate = (req, res, next) => {
  addCustomMessages({
    "title.required": "Title must fill",
    "title.minLength": "Title to short min 20",
    "content.required": "Content must fill",
    "content.minLength": "content to short min 200",
    "category.required": "category must fill",
    "category.minLength": "category to short min 3",
    "status.required": "Status must fill",
    "status.in": "Status must publish,draft, and thrash",
  });

  const rules = new Validator(req.body, {
    title: "required|minLength:20",
    content: "required|minLength:200",
    category: "required|minLength:3",
    status: "required|in:publish,draft,thrash,Publish,Draft,Thrash",
  });

  rules.check().then(function (success) {
    if (success) {
      next();
    } else {
      res.status(400).json({
        status: false,
        message: rules.errors,
        data: [],
      });
    }
  });
};
exports.validateUpdate = (req, res, next) => {
  addCustomMessages({
    "title.required": "Title must fill",
    "title.minLength": "Title to short min 20",
    "content.required": "Content must fill",
    "content.minLength": "content to short min 200",
    "category.required": "category must fill",
    "category.minLength": "category to short min 3",
    "status.required": "Status must fill",
    "status.in": "Status must publish,draft, and thrash",
  });

  const rules = new Validator(req.body, {
    title: "minLength:20",
    content: "minLength:200",
    category: "minLength:3",
    status: "in:publish,draft,thrash,Publish,Draft,Thrash",
  });

  rules.check().then(function (success) {
    if (success) {
      next();
    } else {
      res.status(400).json({
        status: false,
        message: rules.errors,
        data: [],
      });
    }
  });
};
