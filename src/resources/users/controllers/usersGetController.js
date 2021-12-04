const User = require('../user.model');
const { getUsers } = require('../user_repository');

exports.usersGetController = async(ctx)=>{
    try{
        const users = await getUsers()
        const usersWithoutPass = users.map(u=>User.toResponse(u))
        ctx.status = 200
        ctx.body = JSON.stringify(usersWithoutPass)
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}