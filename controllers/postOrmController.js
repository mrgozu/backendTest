
const sequelize = require('../database/dbSequelize')
const post = require('../models/post');

const getPosts = async (req, res) => {
    
    try {
        const posts =await post.findAll();
        res.status(200).json(posts)
      } catch (error) {
        res.status(400).json({msg:error});
      }
}

const postPosts = async (req, res) => {
    try {
        const { body } = req
        const result = post.build(body);
        await result.save();
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({msg:error});
    }
}

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const find = await post.findByPk(id);
        if(!find){
            return res.status(404).json({ msg: 'No existe el Post con el id ' + id })
        }
        await find.destroy();
        res.status(200).json(find)
    } catch (error) {
        res.status(400).json({msg:error});   
    }
}

module.exports = {
    getPosts,
    postPosts,
    deletePost
};