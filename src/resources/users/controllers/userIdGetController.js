const { getUsers } = require('../user_repository');


exports.userIdGetController = async(ctx)=>{
    try{
        await getUsers()
        ctx.status = 200
        ctx.body = `The id${  ctx.params.id}`
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}