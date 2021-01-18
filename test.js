const fs = require("fs")

//读数据库
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
console.log(usersArray)

//写数据库
const user4 = {
    id:4,name:'Alice',password:'444'
}
usersArray.push(user4)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json',string)