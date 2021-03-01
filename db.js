const {encrypt, order, array} = require('./crypt')


const sequence = {
    _id: 1,
    get id() {return this._id++},
    
}

const users = {}


function saveUser(user) {
    if (!user.id) user.id = sequence.id
    if(!user.password) user.password = 'default'
    user.password = order(encrypt(array(user.password)))
    users[user.id] = user 
    return user
}

function getUser(id){
    return users[id] || {}
}

function getUsers(){
    return Object.values(users)
}

module.exports = {saveUser, getUser, getUsers}
