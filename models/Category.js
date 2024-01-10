// Import necessary packages
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a Category model
class Category extends Model {}

// Define the Category model's fields
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Category",
  }
);

// Export the Category model
module.exports = Category;
