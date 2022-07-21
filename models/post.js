const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbSequelize')

const Post = sequelize.define('Post', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});


(async () => {
    await sequelize.sync();
  })()

module.exports=Post;