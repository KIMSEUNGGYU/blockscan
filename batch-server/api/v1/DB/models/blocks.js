module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'blocks',
    {
      number: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true,
      },
      timestamp: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      txcount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      miner: {
        type: DataTypes.STRING(42),
        allowNull: false,
      },
      blockreward: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      uncles: {
        type: DataTypes.INTEGER,
      },
      unclesreward: {
        type: DataTypes.STRING(45),
        // type: DataTypes.FLOAT,
        allowNull: true,
      },
      difficulty: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      totaldifficulty: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      gasused: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      gaslimit: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      extradata: {
        type: DataTypes.STRING(70),
        allowNull: false,
      },
      hash: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      parenthash: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      sha3uncles: {
        type: DataTypes.STRING(66),
        allowNull: false,
      },
      nonce: {
        type: DataTypes.STRING(18),
        allowNull: false,
      },
      gaspriceavg: {
        type: DataTypes.DOUBLE,
        // type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    },
  );
};
