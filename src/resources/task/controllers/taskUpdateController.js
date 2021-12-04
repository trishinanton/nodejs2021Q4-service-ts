const { updateTask } = require('../task_repository');
const { getTasks } = require('../task_repository');
const { HTTP_RESPONSE_BODY } = require('../../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../../utils/constants');

exports.taskUpdateController = async(ctx)=>{
    try{
        const tasks = await getTasks()
        const index = tasks.findIndex(u=>u.id===ctx.params.taskId)
        await updateTask(ctx.request.body,index)
        ctx.status = HTTP_STATUS_CODES.OK
        ctx.body = `Board with id${  ctx.params.id   }success update`
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}