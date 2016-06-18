"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement : true},
	userName: {type:DataTypes.STRING,field:'user_name'}
  });
    return User;
    };
