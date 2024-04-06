import db from "../database/db.js";

import{ DataTypes} from 'sequelize';

const UserModel = db.define('user', {
    name: { type: DataTypes.STRING},
    wins: { type: DataTypes.INTEGER},

})

export default UserModel;