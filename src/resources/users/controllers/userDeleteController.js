const { deleteUser } = require('../user_repository');
const { getUsers } = require('../user_repository');


exports.userDeleteController = async(ctx)=>{
    try{
        const users = await getUsers()
        const index = users.findIndex(u=>u.id===Number(ctx.params.id))
        await deleteUser(index)
        ctx.status = 204
        ctx.body = 'User with id success delete'
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}