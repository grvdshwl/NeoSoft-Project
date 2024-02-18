const axios = require("axios");
const { insertPostData } = require("../services/posts.services");

const storePosts = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    await insertPostData(posts);

    res.status(200).json({ message: "Posts fetched and stored successfully" });
  } catch (error) {
    console.error("Error fetching and storing posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = storePosts;
