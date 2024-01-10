// Import necessary packages
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create a ProductTag model
class ProductTag extends Model {}

// Define the ProductTag model's fields
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ProductTag",
  }
);

// Export the ProductTag model
module.exports = ProductTag;
