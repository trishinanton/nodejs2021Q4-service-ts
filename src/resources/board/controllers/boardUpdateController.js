const { updateBoard } = require('../board_repository');
const { getBoards } = require('../board_repository');

const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../utils/constants');


exports.boardUpdateController = async(ctx)=>{
    try{
        const boards = await getBoards()
        const index = boards.findIndex(u=>u.id===ctx.params.id)
        await updateBoard(ctx.request.body,index)
        ctx.status = HTTP_STATUS_CODES.OK
        ctx.body = `Board with id${  ctx.params.id   }success update`
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}