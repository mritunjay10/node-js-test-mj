/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return  sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    phone_verification: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email_verification: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    },
    uuid: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    fcm_token: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users',
    timestamps: false
  });

};
