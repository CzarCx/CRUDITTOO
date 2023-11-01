import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Books = sequelize.define("Books",{
    name: {
        type: DataTypes.CHAR(30),
        allowNull: false,
    },
    number_pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name_creator: {
        type: DataTypes.CHAR(30),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: "books"
});
export default Books;
