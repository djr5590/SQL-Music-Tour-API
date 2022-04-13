'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class meet_greet extends Model {
        static associate({ Band }) {
            // band
            meet_greet.belongsTo(Band, {
                foreignKey: "band_id",
                as: "band"
            })
        }
    }
    meet_greet.init({
        meet_greet_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        event_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'events',
                key: 'event_id'
            }
        },
        band_id: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            references: {
                model: 'bands',
                key: 'band_id'
            }
        },
        meet_start_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        meet_end_time: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'meet_greet',
        tableName: 'meet_greets',
        timestamps: false
    });
    return meet_greet;
};