const pool = require('../database/dbPg');

const getPosts = async (req, res) => {

    pool.query('SELECT * from "Posts" ', (error, results)=>{
        if(error){
            return res.status(400).json({msg:error});
        }
        return res.status(200).json(results.rows)
    })
}
const postPosts = async (req, res) => {
    const { name, description } = req.body
    console.log(name,description)
    pool.query( `INSERT INTO "Posts" ("name", description) VALUES('${name}','${description}')`, (error, results)=>{
        if(error){
            return res.status(400).json({msg:error});
        }
        return res.status(200).json(results)
    })
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