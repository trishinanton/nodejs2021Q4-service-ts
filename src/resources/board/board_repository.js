
const path = require('path');
const { writeJsonToFile } = require('../../fs-utils');
const { readJsonFromFile } = require('../../fs-utils');

const pathToBoardDb = path.join(__dirname, '../../db/db_board.json')

const getBoards = ()=>readJsonFromFile(pathToBoardDb)
const addBoard = async(name)=>{
    const boards = await getBoards();
    boards.push(name);
    return writeJsonToFile (pathToBoardDb,boards)
}
const updateBoard = async (newBoard,indexBoard)=>{
    const boards = await getBoards();
    boards[indexBoard].title =newBoard.title;
    return writeJsonToFile(pathToBoardDb,boards)
}
const deleteBoard = async (indexBoard)=>{
    const boards = await getBoards();
    boards.splice(indexBoard, 1)
    return writeJsonToFile(pathToBoardDb, boards)
}

module.exports = {
    getBoards,
    addBoard,
    updateBoard,
    deleteBoard
};