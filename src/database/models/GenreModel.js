const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Genre = sequelize.define(
    "Genre",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      ranking: {
        type: DataTypes.INTEGER,
      },
      active: {
        type: DataTypes.TINYINT,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      tableName: "genres",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  Genre.associate = (models) => {
    Genre.hasMany(models.movieModel, {
      as: 'movies',
      foreignKey: 'genreId'
    });
  }

  return Genre;
};
