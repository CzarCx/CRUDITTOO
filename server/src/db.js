import {Sequelize} from 'sequelize'

const port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    port,
    username,
    password,
    database
})


export async function syncTables(){
    try {
        await sequelize.sync();
        console.log(`>>Tablas sincronizadas`)
    }catch (error) {
        throw new Error(`Ocurrio un Error al intentar sincronizar las tablas: ${error}`)
    }
}


export default sequelize