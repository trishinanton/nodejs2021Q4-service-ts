const path = require('path');
const {writeJsonToFile} = require("../../fs-utils");
const {readJsonFromFile} = require("../../fs-utils");


const pathToUsersDb = path.join(__dirname, '../../db/db_users.json')
const getUsers = ()=>readJsonFromFile(pathToUsersDb)
const addUser = async (user)=>{
    const users = await getUsers();
    console.log(users)
    users.push(user);
    return writeJsonToFile (pathToUsersDb,users)

}
const updateUser = async (newUser,indexUser)=>{
    const users = await getUsers();
    users[indexUser].name =newUser.name;
    return writeJsonToFile(pathToUsersDb,users)
}
const deleteUser = async (indexUser)=>{
    const users = await getUsers();
    users.splice(indexUser, 1)
    return writeJsonToFile(pathToUsersDb, users)
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};
