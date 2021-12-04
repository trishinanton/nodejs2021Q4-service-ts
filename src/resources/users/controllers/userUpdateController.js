const { updateUser } = require('../user_repository');
const { getUsers } = require('../user_repository');


exports.userUpdateController = async(ctx)=>{
    try{
        const users = await getUsers()
        const index = users.findIndex(u=>u.id===Number(ctx.params.id))
        await updateUser(ctx.request.body,index)
        ctx.status = 200
        ctx.body = `User with id${  ctx.params.id   }success update`
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}