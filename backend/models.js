const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db_connection');

const Brand = sequelize.define('Brand', {
    brand_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    tableName: 'Brands'
  });


  const ClothingType = sequelize.define('ClothingType', {
    type_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    tableName: 'ClothingTypes'
});


const SizeMatching = sequelize.define('SizeMatching', {
  match_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  brand_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'Brands',
          key: 'brand_id'
      }
  },
  type_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'ClothingTypes',
          key: 'type_id'
      }
  }
}, {
  timestamps: false,
  tableName: 'SizeMatching'
});


Brand.hasMany(SizeMatching, { foreignKey: 'brand_id' });
SizeMatching.belongsTo(Brand, { foreignKey: 'brand_id' });

ClothingType.hasMany(SizeMatching, { foreignKey: 'type_id' });
SizeMatching.belongsTo(ClothingType, { foreignKey: 'type_id' });

  
module.exports = { Brand, ClothingType, SizeMatching };
