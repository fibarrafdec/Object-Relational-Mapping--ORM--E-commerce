// Import necessary packages
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// Create a Tag model
class Tag extends Model {}

// Define the Tag model's fields
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Tag",
  }
);

// Export the Tag model
module.exports = Tag;
