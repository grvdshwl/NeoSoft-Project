
const PostModel = require("../models/post.model");
const insertPostData = async (posts) => {
  try {
    await PostModel.insertMany(posts);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { insertPostData };
