module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'txs',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        // allowNull: false,
        primaryKey: true,
      },
      hash: {
        type: DataTypes.STRING(66),
        // allowNull: false,
      },
      status: {
        type: DataTypes.STRING(5),
        // allowNull: false,
      },
      timestamp: {
        type: DataTypes.STRING(45),
        // allowNull: false,
      },
      from: {
        type: DataTypes.STRING(42),
        // allowNull: false,
      },
      to: {
        type: DataTypes.STRING(42),
        // allowNull: false,
      },
      value: {
        type: DataTypes.STRING(45),
        // allowNull: false,
      },
      txfee: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      gasprice: {
        type: DataTypes.STRING(45),
        // allowNull: false,
      },
      gaslimit: {
        type: DataTypes.STRING(45),
        // allowNull: false,
      },
      gasused: {
        type: DataTypes.STRING(45),
        // allowNull: false,
      },
      nonce: {
        type: DataTypes.STRING(45),
        // allowNull: false,
      },
      inputdata: {
        // type: DataTypes.STRING(4100),
        type: DataTypes.TEXT('long'),
        // allowNull: false,
      },
      index: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      blocksnumber: {
        type: DataTypes.STRING(45),
        // allowNull: false,
      },

      // blocks_number: {
      //   type: DataTypes.STRING(45),
      //   // allowNull: false,
      // },
    },
    {
      timestamps: false,
    },
  );
};
