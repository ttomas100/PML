var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Music = sequelize.define('Music', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    })
    return Music;
};

