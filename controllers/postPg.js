

const getPosts = async (req, res) => {
    // const post = await Post.findAll();
    res.json('ok')
}
const postPosts = async (req, res) => {
    const { body } = req
    // const post = await Post.findAll();
    res.json('ok')
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    // const post = await Post.findAll();
    res.json('ok')
}
module.exports = {
    getPosts,
    postPosts,
    deletePost
}