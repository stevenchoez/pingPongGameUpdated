import {Sequelize} from 'sequelize';

const db = new Sequelize('pingpong', 'root', 'Lionelmessi10', {
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps:false
    }
})

export default db