'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class set_time extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    set_time.init({
        set_time_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'events',
                key: 'event_id'
            }
        },
        stage_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'stages',
                key: 'stage_id'
            }
        },
        band_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'bands',
                key: 'band_id'
            }
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'set_time',
        tableName: 'set_times',
        timestamps: false
    });
    return set_time;
};