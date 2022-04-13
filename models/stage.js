'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stage extends Model {
        static associate({ Event, StageEvent }) {
            // events
            stage.belongsToMany(Event, {
                foreignKey: "stage_id",
                as: "events",
                through: StageEvent
            })
        }
    }

    stage.init({
        stage_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'stage',
        tableName: 'stages',
        timestamps: false
    });
    return stage;
};