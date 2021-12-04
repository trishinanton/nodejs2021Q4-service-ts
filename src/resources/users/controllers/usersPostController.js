const User = require('../user.model');
const { addUser } = require('../user_repository');


exports.userPostController = async(ctx)=>{
    try{
        const user = new User(ctx.request.body)
        await addUser(user)
        ctx.status = 201
        ctx.body = 'user success added'
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}