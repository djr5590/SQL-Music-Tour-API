'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class set_time extends Model {
        static associate({ Band, Event, Stage }) {
            // band
            set_time.belongsTo(Band, {
                foreignKey: "band_id",
                as: "band"
            })

            // event
            set_time.belongsTo(Event, {
                foreignKey: "event_id",
                as: "event"
            })

            // stage 
            set_time.belongsTo(Stage, {
                foreignKey: "stage_id",
                as: "stage"
            })
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