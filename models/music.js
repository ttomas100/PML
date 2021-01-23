
module.exports = function(sequelize, DataTypes) {
  var Music = sequelize.define("Music", {
    email: DataTypes.STRING,
    musicId: DataTypes.STRING,
    created_at: DataTypes.DATE
  });
 
  return Music;
};
